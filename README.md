# Backbone Playground

This is a testing environment for WebApps based on MarionetteJS.

To run the Playground use the appropriate run-scripts.

#### Component Parts

[Gulp](https://www.npmjs.org/package/gulp) build system

[CoffeeScript](http://coffeescript.org/) compilation

Two-Way data binding with [Backbone.Stickit](http://nytimes.github.io/backbone.stickit/)

Two mock APIs based on [hapi-dummy-api](https://github.com/HenrikJoreteg/hapi-dummy-api)

[Backbone.Radio](https://github.com/jmeas/backbone.radio) to build decoupled applications.

Runs on a [HAPI-Server](http://hapijs.com)

Templating with [Jade](http://jade-lang.com/)

Design based on a free template from [redefineIT](http://redefineinfotech.com/5-free-bootstrap-html-templates/)

Icons & Fonts from [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

...more to come soon ;)

![Backbone Playground](http://a54.imgup.net/Untitleda80e.png "Playground Screenshot")

#### Building with Gulp

Start server: `gulp server`

Debug build: `gulp`

Production build: `gulp production`

Debug build with LiveReload: `gulp live`

Or use the run-scripts for Windows / *nix `run.bat` respective `run.sh`

#### CoffeeScript compilation

Compilation is supported via `configs/coffee_config.js` which is a simple CommonJS module. There's already a  `Cakefile` located in the project root.
By default the compilation starts with `cake build` but it can be adjusted by modifying the `Cakefile` and/or `configs/coffee_config.js`.
The compiled JS files are located together with their CoffeeScript counterparts. To change this behavior set a general `--output [DIR]` in `Cakefile`.
For example `coffee --compile --output OUT_DIR .`

More information regarding CoffeeScript compilation can be found [here](http://arcturo.github.io/library/coffeescript/05_compiling.html).

Install CoffeeScript with `npm i -g coffee-script`

#### MarionetteJS console debugging

The `Marionette.Application` is located under `window.app`

![MarionetteJS Console](http://t88.imgup.net/marionette5d70.png "MarionetteJS")

#### Backbone.Radio

In the upcoming release 3 of MarionetteJS _Backbone.Radio_ will replace _Backbone.Wreqr_. There's also a [shim](https://gist.github.com/jmeas/7992474cdb1c5672d88b)
for version 2.1 which is included in Backbone Playground. Here's an example on how to use Backbone.Radio

![Backbone.Radio Console](http://s86.imgup.net/backbone_r42e4.png "Backbone.Radio Console")

Another example is located on the front page. Just type something into the box.

Check the code in `views/blank.js`

![Backbone.Radio Web Example](http://n33.imgup.net/backbonerabe42.png "Backbone.Radio Web")

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

<a href="https://github.com/brakmic/BackbonePlayground/blob/master/LICENSE">MIT</a>
