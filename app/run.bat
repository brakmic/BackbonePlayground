@echo off
IF "%~1"=="" (
    SET NODE_ENV=dev
) ELSE (
    SET NODE_ENV=%1
)
set GETCONFIG_ROOT=%CD%\configs
gulp server
