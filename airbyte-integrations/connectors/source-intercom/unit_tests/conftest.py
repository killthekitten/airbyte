#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from pytest import fixture

from .helpers import build_config


@fixture(name="config")
def config_fixture():
    return build_config()
