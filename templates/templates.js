var jade = require('@lukekarrys/jade-runtime');

var templatizer = {};

templatizer["attic"] = {};
templatizer["includes"] = {};
templatizer["marionette"] = {};

// blank.jade compiled template
templatizer["blank"] = function tmpl_blank() {
    return '<div class="container blank"><div class="row"><div class="col-lg-4"></div><div class="col-lg-6"><h2 class="welcome">Welcome to the Backbone Playground!</h2><h3><p>  This is a testing environment for Backbone-based WebApps.</p><p>  It is based on <strong>MarionetteJS</strong></p><p>   It also reuses some modules from the <strong>AmpersandJS</strong> framework (getconfig, moonboots, templatizer etc.).</p><div class="exec command area"><div class="exec general-panel"><p class="exec panel"><label class="exec exec-command-label">Command&nbsp&nbsp<input name="message" type="text" placeholder=" Enter a command" class="exec exec-command"/></label></p><p class="exec button-panel"><input type="button" id="command-button" value="Execute"/></p></div></div></h3></div></div></div>';
};

// edit.jade compiled template
templatizer["edit"] = function tmpl_edit() {
    return '<h2>Edit</h2><ul class="list-group list-unstyled"><li><label for="firstName"><input name="firstName" type="text" class="edit firstName"/></label></li><li><label for="lastName"><input name="lastName" type="text" class="edit lastName"/></label></li><li><label for="email"><input name="email" type="text" class="edit email"/></label></li><li><label for="homepage"><input name="homepage" type="text" class="edit homepage"/></label></li></ul>';
};

// header.jade compiled template
templatizer["header"] = function tmpl_header() {
    return '<div class="navigation-top navbar-top-fixed"><nav role="navigation" style="margin-bottom:0" class="navbar navbar-default navbar-cls-top"><div class="navbar-header"><button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/" class="navbar-brand"><i>Playground</i></a></div><div style="color: blue;padding: 15px 50px 5px 50px;float: right;font-size: 16px;">Last access : 30 May 2014 &nbsp;<a href="#" class="btn btn-danger square-btn-adjust">Logout</a></div></nav></div>';
};

// customerlist.jade compiled template
templatizer["customerlist"] = function tmpl_customerlist() {
    return '<div class="container"><div class="row"><div class="col-sm-6 col-md-4"></div><div class="col-sm-6 col-md-4"><h3>Customers</h3><ul id="customer-list" class="customerlist list-group list-unstyled"></ul></div></div></div>';
};

// htmlhead.jade compiled template
templatizer["htmlhead"] = function tmpl_htmlhead() {
    return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/><title>Backbone Playground</title>';
};

// index.jade compiled template
templatizer["index"] = function tmpl_index() {
    return '<!DOCTYPE html><link rel="stylesheet" href="css/styles.css" type="text/css"><script src="scripts/vendor.js"></script><script src="scripts/main.js"></script>';
};

// preview.jade compiled template
templatizer["preview"] = function tmpl_preview() {
    return '<h3>Preview</h3><hr/><div class="preview firstName"></div><div class="preview lastName"></div><div class="preview email"></div><a href="http://www.web.de" target="_blank" class="preview homepage"></a>';
};

// twoway.jade compiled template
templatizer["twoway"] = function tmpl_twoway() {
    return '<div class="row"><div class="col-xs-6 col-sm-3 emptycolumn"></div><div id="useredit" class="col-xs-6 col-sm-3"></div><!--.col-xs-6.col-sm-3.emptycolumn--><div id="userpreview" class="col-xs-6 col-sm-3"></div></div>';
};

// attic\index.jade compiled template
templatizer["attic"]["index"] = function tmpl_attic_index() {
    return '<!--for testing in the console--><!--another option is to load these scripts from node_modules via require()--><script src="scripts/vendor/jquery-2.1.1.js"></script><script src="scripts/vendor/underscore.js"></script><script src="scripts/vendor/backbone.js"></script><script src="scripts/vendor/bootstrap.js"></script>';
};

// includes\customer.jade compiled template
templatizer["includes"]["customer"] = function tmpl_includes_customer() {
    return '<div class="customer"><img src="http://robohash.org/test" class="customer picture"/><div><label for="firstName">First name:&nbsp&nbsp<span class="customer firstName"></span></label></div><div><label for="lastName">Last name:&nbsp&nbsp<span class="customer lastName"></span></label></div><div><label for="email">E-Mail:&nbsp&nbsp<span class="customer email"></span></label></div><div><label for="phone">Phone:&nbsp&nbsp<span class="customer phone"></span></label></div><div><label for="city">City:&nbsp&nbsp<span class="customer city"></span></label></div></div>';
};

// marionette\app.jade compiled template
templatizer["marionette"]["app"] = function tmpl_marionette_app() {
    return '<div id="app" class="app-container"></div>';
};

// marionette\header_nav.jade compiled template
templatizer["marionette"]["header_nav"] = function tmpl_marionette_header_nav() {
    return '<div class="m-nav navigation-top navbar-top-fixed"><nav role="navigation" style="margin-bottom:0" class="navbar navbar-default navbar-cls-top"><div class="navbar-header m-header"><button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/" class="navbar-brand"><i>Playground</i></a></div><div style="color: blue;padding: 15px 50px 5px 50px;float: right;font-size: 16px;">Last access : 30 May 2014 &nbsp;<a href="#" class="btn btn-danger square-btn-adjust">Logout</a></div></nav></div>';
};

// marionette\main_layout.jade compiled template
templatizer["marionette"]["main_layout"] = function tmpl_marionette_main_layout() {
    return '<div id="header-region" class="m-header"></div><div id="sidebar-region" class="m-sidebar"></div><div id="main-region" class="m-main"></div>';
};

// marionette\main_view.jade compiled template
templatizer["marionette"]["main_view"] = function tmpl_marionette_main_view() {
    return '<div id="main-view"></div>';
};

// marionette\sidebar_nav.jade compiled template
templatizer["marionette"]["sidebar_nav"] = function tmpl_marionette_sidebar_nav() {
    return '<div class="navigation-left m-sidebar sidebar-nav-fixed"><nav role="navigation" class="navbar-default navbar-side"><div class="sidebar-collapse"><ul id="sidebar" class="nav list-group backbone-playground sidebar-menu"><li class="text-center"><img src="/public/css/images/backbone_logo.png" class="user-image img-responsive"/></li><li><a href="/home" class="menu-item active-menu"><i class="fa fa-home fa-lg">&nbsp&nbspHome</i></a></li><li><a href="/twoway" class="menu-item"><i class="fa fa-desktop fa-lg">&nbsp&nbspTwo-Way Data Binding</i></a></li><li><a href="/customers" class="menu-item"><i class="fa fa-qrcode fa-lg">&nbsp&nbspREST-API</i></a></li><li><a href="/" class="menu-item"><i class="fa fa-bar-chart-o fa-lg">&nbsp&nbspEmpty</i></a></li><li><a href="/" class="menu-item"><i class="fa fa-table fa-lg">&nbsp&nbspEmpty</i></a></li><li><a href="/" class="menu-item"><i class="fa fa-edit fa-lg">&nbsp&nbspEmpty</i></a></li><li><a href="/" class="menu-item"><i class="fa fa-edit fa-lg">&nbsp&nbspEmpty</i></a></li></ul></div></nav></div>';
};

// marionette\main_region.jade compiled template
templatizer["marionette"]["main_region"] = function tmpl_marionette_main_region() {
    return '<div id="main" class="marionette-main-region"></div>';
};


module.exports = templatizer;
