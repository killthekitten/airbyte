# coding: utf-8

from __future__ import annotations
from datetime import date, datetime  # noqa: F401

import re  # noqa: F401
from typing import Any, Dict, List, Optional  # noqa: F401

from pydantic import AnyUrl, BaseModel, EmailStr, validator  # noqa: F401
from connector_builder.generated.models.any_of_composite_error_handler_default_error_handler import AnyOfCompositeErrorHandlerDefaultErrorHandler
from connector_builder.generated.models.composite_error_handler_all_of import CompositeErrorHandlerAllOf


class CompositeErrorHandler(BaseModel):
    """NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).

    Do not edit the class manually.

    CompositeErrorHandler - a model defined in OpenAPI

        error_handlers: The error_handlers of this CompositeErrorHandler.
    """

    error_handlers: List[AnyOfCompositeErrorHandlerDefaultErrorHandler]

CompositeErrorHandler.update_forward_refs()
