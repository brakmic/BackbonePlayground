# Backbone Playground

This is a testing environment for Backbone-based WebApps. It is based on MarionetteJS.
It also reuses some modules from the AmpersandJS framework (getconfig, moonboots, templatizer etc.)

To run the Playground use the appropriate run-scripts.

#### Elements

Two-Way data binding with [Backbone.Stickit](http://nytimes.github.io/backbone.stickit/)

Two mock APIs based on [hapi-dummy-api](https://github.com/HenrikJoreteg/hapi-dummy-api)

Runs on [HAPI-Server](http://hapijs.com)

A nice design based on a free template from [redefineIT](http://redefineinfotech.com/5-free-bootstrap-html-templates/)

![Backbone Playground](http://q40.imgup.net/backbone_p1d5e.png "Playground Screenshot")

Icons & Fonts from [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

...more to come soon ;)

#### MarionetteJS console debugging

The `Marionette.Application` is located under `window.app` 

![MarionetteJS Console](http://t88.imgup.net/marionette5d70.png "MarionetteJS")

#### Backbone.Radio

The upcoming release 3 of MarionetteJS will replace Backbone.Wreqr with Backbone.Radio. There's also a [shim](https://gist.github.com/jmeas/7992474cdb1c5672d88b) 
for the version 2.1 which is included in this Playground. Here's an example on how to use Backbone.Radio

![Backbone.Radio Console](http://s86.imgup.net/backbone_r42e4.png "Backbone.Radio")

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

[MarionetteJS](http://marionettejs.com)

[AmpersandJS](http://ampersandjs.com)

#### License

MIT
