#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from typing import Dict


def build_config() -> Dict[str, str]:
    return {
        "api_endpoint": "https://api.intercom.io/",
        "access_token": "TOKEN",
        "start_date": "2022-03-20T00:00:00Z",
    }
