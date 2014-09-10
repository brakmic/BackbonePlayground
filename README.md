# Backbone Playground

This is a testing environment for Backbone-based WebApps. It is based on MarionetteJS.
It also reuses some modules from the AmpersandJS framework (getconfig, moonboots, templatizer etc.)

To run the Playground use the appropriate run-scripts.

#### Elements

Built-in [CoffeScript](http://coffeescript.org/) compilation in dev environment.

Two-Way data binding with [Backbone.Stickit](http://nytimes.github.io/backbone.stickit/)

Two mock APIs based on [hapi-dummy-api](https://github.com/HenrikJoreteg/hapi-dummy-api)

[Backbone.Radio](https://github.com/jmeas/backbone.radio) to build decoupled applications.

Runs on [HAPI-Server](http://hapijs.com)

Templating with [Jade](http://jade-lang.com/)

A nice design based on a free template from [redefineIT](http://redefineinfotech.com/5-free-bootstrap-html-templates/)

![Backbone Playground](http://q40.imgup.net/backbone_p1d5e.png "Playground Screenshot")

Icons & Fonts from [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

...more to come soon ;)

#### CoffeeScript compilation

Compilation is supported via `config/coffee_config.js` which is a simple CommonJS module. There's already a  `Cakefile` located in the project root. 
By default the compilation starts with `cake build` but it can be adjusted by modifying the `Cakefile` and/or `config/coffee_config.js`.
The compilation is disabled in ___prod environment___ (see `dev_config.json` & `production_config.json`).
The compilation starts on ___each page reload___ in ___dev___ environment. The compiled JS files are located together with 
their CoffeeScript counterparts. To change this behavior set a general `--output [DIR]` in `Cakefile`.  
For example `coffee --compile --output OUT_DIR .` More information regarding CoffeeScript compilation can be found [here](http://arcturo.github.io/library/coffeescript/05_compiling.html).

To use CoffeeScript in ___Backbone Playground___ install it with `npm i -g coffee-script`

#### MarionetteJS console debugging

The `Marionette.Application` is located under `window.app` 

![MarionetteJS Console](http://t88.imgup.net/marionette5d70.png "MarionetteJS")

#### Backbone.Radio

The upcoming release 3 of MarionetteJS will replace Backbone.Wreqr with Backbone.Radio. There's also a [shim](https://gist.github.com/jmeas/7992474cdb1c5672d88b) 
for the version 2.1 which is included in this Playground. Here's an example on how to use Backbone.Radio

![Backbone.Radio Console](http://s86.imgup.net/backbone_r42e4.png "Backbone.Radio Console")

Another example is located on the front page. Just type something into the box.

Check the code in `views/blank.js`

![Backbone.Radio Web Example](http://n33.imgup.net/backbonerabe42.png "Backbone.Radio Web")

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
