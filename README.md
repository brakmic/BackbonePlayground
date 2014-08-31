# Backbone Playground

This is a testing environment for Backbone-based WebApps. It is based on MarionetteJS.
It also reuses some modules from the AmpersandJS framework (getconfig, moonboots, templatizer etc.)

To run the Playground use the appropriate run-scripts.

#### Elements

Two-Way data binding with [Backbone.Stickit](http://nytimes.github.io/backbone.stickit/)

Two mock APIs based on [hapi-dummy-api](https://github.com/HenrikJoreteg/hapi-dummy-api)

Runs on [HAPI-Server](http://hapijs.com)

A nice design based on a free template from [redefineIT](http://redefineinfotech.com/5-free-bootstrap-html-templates/)

![Backbone Playground](http://v55.imgup.net/playground5e1e.png "Screenshot")

Icons & Fonts from [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

...more to come soon ;)

#### MarionetteJS

> When the app starts an 'embedded' MarionetteJS instance gets created and spits out a very basic ItemView. 
The __m_app.js__ script in the root folder contains some basic examples about Regions, Views and Layouts.
MarionetteJS templates are under the __templates/marionette__ folder. The current router implementation __playrouter.js__
doesn't control MarionetteJS views. Future Playground versions will contain a separate 'subsystem'
dedicated solely to MarionetteJS.

#### MarionetteJS console debugging

![MarionetteJS Console](http://x86.imgup.net/marionettedfcd.png "MarionetteJS")

### Running without run-scripts
If you're not using one of the available run-scripts you must set the GETCONFIG_ROOT manually.

Windows: 
`set GETCONGIF_ROOT=%CD%\configs`

*nix bash:
`` export GETCONFIG_ROOT=`pwd`/configs ``

### How to run it

1. download/install [node.js](http://nodejs.org/)
1. install dependencies: `npm i`
1. run it: `run.bat` on Windows or `./run.sh` on *nix
1. open http://localhost:3000 in a browser

### Links

[BackboneJS](http://backbonejs.org)

[AmpersandJS](http://ampersandjs.com)

[MarionetteJS](http://marionettejs.com)


#### License

MIT
