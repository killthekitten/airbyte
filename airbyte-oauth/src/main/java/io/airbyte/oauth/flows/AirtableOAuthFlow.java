/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.oauth.flows;

import com.fasterxml.jackson.databind.JsonNode;
import com.google.common.annotations.VisibleForTesting;
import com.google.common.collect.ImmutableMap;
import io.airbyte.commons.json.Jsons;
import io.airbyte.config.persistence.ConfigRepository;
import io.airbyte.oauth.BaseOAuth2Flow;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Supplier;
import org.apache.http.client.utils.URIBuilder;

/**
 * Following docs from
 * https://airtable.com/developers/web/api/oauth-reference#authorization-request-query
 */
public class AirtableOAuthFlow extends BaseOAuth2Flow {

  private static final String ACCESS_TOKEN_URL = "https://airtable.com/oauth2/v1/token";

  private static final List<String> SCOPES = Arrays.asList(
      "data.records:read",
      "data.recordComments:read",
      "schema.bases:read");

  // Randomly generated string, min 43 - max 150 symbols
  private static final String CODE_VERIFIER = "XmG5afcqXCamPk3jshWQXmG5afcqXCamPk3jshWQXmG5afcqXCamPk3jshWQXmG5afcqXCamPk3jshWQ";
  // Base64(s256) from CODE_VERIFIER
  private static final String CODE_CHALLENGE = "jajoblvFNHmH8rSnW84xFEUKMGC8CYwR82phhRR6iCg";
  // State
  private static final String STATE = "WeHH_yy2irpl8UYAvv-my";

  public String getScopes() {
    // More info and additional scopes could be found here:
    // https://airtable.com/developers/web/api/scopes
    // should be space-delimitered
    return String.join(" ", SCOPES);
  }

  public String getCodeVerifier() {
    return CODE_VERIFIER;
  }

  public String getCodeChanlenge() {
    return CODE_CHALLENGE;
  }

  @Override
  public String getState() {
    return STATE;
  }

  public AirtableOAuthFlow(final ConfigRepository configRepository, final HttpClient httpClient) {
    super(configRepository, httpClient);
  }

  @VisibleForTesting
  public AirtableOAuthFlow(final ConfigRepository configRepository, final HttpClient httpClient, final Supplier<String> stateSupplier) {
    super(configRepository, httpClient, stateSupplier);
  }

  @Override
  protected String formatConsentUrl(final UUID definitionId,
                                    final String clientId,
                                    final String redirectUrl,
                                    final JsonNode inputOAuthConfiguration)
      throws IOException {

    final URIBuilder builder = new URIBuilder()
        .setScheme("https")
        .setHost("airtable.com")
        .setPath("oauth2/v1/authorize")
        // required
        .addParameter("redirect_uri", redirectUrl)
        .addParameter("client_id", clientId)
        .addParameter("response_type", "code")
        .addParameter("scope", getScopes())
        .addParameter("code_challenge", getCodeChanlenge())
        .addParameter("code_challenge_method", "S256")
        .addParameter("state", getState());

    try {
      return builder.build().toString();
    } catch (final URISyntaxException e) {
      throw new IOException("Failed to format Consent URL for OAuth flow", e);
    }
  }

  @Override
  protected String getAccessTokenUrl(final JsonNode inputOAuthConfiguration) {
    return ACCESS_TOKEN_URL;
  }

  @Override
  protected Map<String, String> getAccessTokenQueryParameters(String clientId,
                                                              String clientSecret,
                                                              String authCode,
                                                              String redirectUrl) {
    return ImmutableMap.<String, String>builder()
        // required
        .put("code", authCode)
        .put("redirect_uri", redirectUrl)
        .put("grant_type", "authorization_code")
        .put("client_id", clientId)
        .put("code_verifier", getCodeVerifier())
        .put("code_challenge_method", "S256")
        .build();
  }

  @Override
  protected Map<String, Object> completeOAuthFlow(final String clientId,
                                                  final String clientSecret,
                                                  final String authCode,
                                                  final String redirectUrl,
                                                  final JsonNode inputOAuthConfiguration,
                                                  final JsonNode oAuthParamConfig)
      throws IOException {
    final var accessTokenUrl = getAccessTokenUrl(inputOAuthConfiguration);
    final byte[] authorization = Base64.getEncoder()
        .encode((clientId + ":" + clientSecret).getBytes(StandardCharsets.UTF_8));
    final HttpRequest request = HttpRequest.newBuilder()
        .POST(HttpRequest.BodyPublishers
            .ofString(tokenReqContentType.getConverter().apply(
                getAccessTokenQueryParameters(clientId, clientSecret, authCode, redirectUrl))))
        .uri(URI.create(accessTokenUrl))
        .header("Content-Type", tokenReqContentType.getContentType())
        .header("Authorization", "Basic " + new String(authorization, StandardCharsets.UTF_8))
        .build();
    try {
      final HttpResponse<String> response = httpClient.send(request,
          HttpResponse.BodyHandlers.ofString());

      return extractOAuthOutput(Jsons.deserialize(response.body()), accessTokenUrl);
    } catch (final InterruptedException e) {
      throw new IOException("Failed to complete OAuth flow", e);
    }
  }

}
