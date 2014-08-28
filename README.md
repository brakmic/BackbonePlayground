# Backbone Playground

This app is a testing environment for Backbone-based WebApps.
It reuses some modules from the AmpersandJS framework (getconfig, moonboots, templatizer etc.)
There's also a complete MarionetteJS framework included (as a separate JS + Marionette.Wreqr and Marionette.Babysitter packages).

To run the Playground use the appropriate run-scripts.

#### Important
All config files are located in the configs-directory.

#### Elements

Two-Way data binding with [Backbone.Stickit](http://nytimes.github.io/backbone.stickit/)

Two mock APIs based on [hapi-dummy-api](https://github.com/HenrikJoreteg/hapi-dummy-api)

A nice design based on a free template from [redefineIT](http://redefineinfotech.com/5-free-bootstrap-html-templates/)

![Backbone Playground](http://v55.imgup.net/playground5e1e.png "Screenshot")

Icons & Fonts from [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

...more to come soon ;)

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
