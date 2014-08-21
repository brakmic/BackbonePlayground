# Backbone Playground

This app serves as a testing environment for Backbone-based WebApps.
It reuses some modules from the AmpersandJS framework (getconfig, moonboots etc.)
There's also a DOS-batch "run.bat" to start the app on a Windows system (or just `npm start` from the console).
The DOS-script accepts a single parameter to select the environment (dev or production).
All config files are located in the configs-directory.
The GETCONFIG_ROOT must be set to the proper config-directory.


For example:

Windows: 
`GETCONGIF_ROOT=%CD%\configs`

*nix bash:
`export GETCONFIG_ROOT=`pwd`/configs`

## How to run it

1. download/install [node.js](http://nodejs.org/)
1. install dependencies: `npm i`
1. run it: `npm start`
1. open http://localhost:3000 in a browser

## License

MIT
