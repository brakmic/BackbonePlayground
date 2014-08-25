(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["attic"] = {};
    templatizer["includes"] = {};

    // attic\index.jade compiled template
    templatizer["attic"]["index"] = function tmpl_attic_index() {
        return '<!--for testing in the console--><!--another option is to load these scripts from node_modules via require()--><script src="scripts/vendor/jquery-2.1.1.js"></script><script src="scripts/vendor/underscore.js"></script><script src="scripts/vendor/backbone.js"></script><script src="scripts/vendor/bootstrap.js"></script>';
    };

    // blank.jade compiled template
    templatizer["blank"] = function tmpl_blank() {
        return '<div class="container blank"><div class="row"><div class="col-lg-4"></div><div class="col-lg-6"><span class="welcome"> Welcome to the Backbone Playground!</span></div></div></div>';
    };

    // customerlist.jade compiled template
    templatizer["customerlist"] = function tmpl_customerlist() {
        return '<section class="clist"><div class="container"><div class="row"><div class="col-sm-6 col-md-4"></div><div class="col-sm-6 col-md-4"><h3>Customers</h3><ul id="thelist" class="customerlist list-group list-unstyled"></ul></div></div></div></section>';
    };

    // demo.jade compiled template
    templatizer["demo"] = function tmpl_demo() {
        return '<div class="container demo"><div class="row"><div class="col-lg-4"><span>This is a DEMO view</span></div></div></div>';
    };

    // edit.jade compiled template
    templatizer["edit"] = function tmpl_edit() {
        return '<div class="edit"><h2>Edit</h2><ul class="list-group list-unstyled"><li><label for="firstName"><input name="firstName" type="text" class="edit firstName"/></label></li><li><label for="lastName"><input name="lastName" type="text" class="edit lastName"/></label></li><li><label for="email"><input name="email" type="text" class="edit email"/></label></li><li><label for="homepage"><input name="homepage" type="text" class="edit homepage"/></label></li></ul></div>';
    };

    // header.jade compiled template
    templatizer["header"] = function tmpl_header() {
        return '<nav class="navbar navbar-default navbar-inverse"><div class="container"><div class="navbar-header"><a href="/" class="navbar-brand">Backbone Playground</a></div><ul class="nav navbar-nav"><li><a href="/">Home</a></li><li><a href="/customers">Customers</a></li><li><a href="/twoway">TwoWay</a></li></ul></div></nav>';
    };

    // htmlhead.jade compiled template
    templatizer["htmlhead"] = function tmpl_htmlhead() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/><title>Backbone Playground</title><!--link(href=\'http://fonts.googleapis.com/css?family=Open+Sans\', rel=\'stylesheet\', type=\'text/css\')-->';
    };

    // includes\customer.jade compiled template
    templatizer["includes"]["customer"] = function tmpl_includes_customer() {
        return '<div class="customer"><img src="http://robohash.org/test" class="customer picture"/><div><label for="firstName">First name:&nbsp&nbsp<span class="customer firstName"></span></label></div><div><label for="lastName">Last name:&nbsp&nbsp<span class="customer lastName"></span></label></div><div><label for="email">E-Mail:&nbsp&nbsp<span class="customer email"></span></label></div><div><label for="phone">Phone:&nbsp&nbsp<span class="customer phone"></span></label></div><div><label for="city">City:&nbsp&nbsp<span class="customer city"></span></label></div></div>';
    };

    // index.jade compiled template
    templatizer["index"] = function tmpl_index() {
        return '<!--for testing in the console--><!--another option is to load these scripts from node_modules via require()--><script src="scripts/vendor/jquery-2.1.1.js"></script><script src="scripts/vendor/underscore.js"></script><script src="scripts/vendor/backbone.js"></script><script src="scripts/vendor/bootstrap.js"></script>';
    };

    // main.jade compiled template
    templatizer["main"] = function tmpl_main() {
        return '<body><div class="app"><div class="wrapper"><div class="navigation-top navbar-top-fixed"><nav role="navigation" style="margin-bottom:0" class="navbar navbar-default navbar-cls-top"><div class="navbar-header"><button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/" class="navbar-brand"><i>Playground</i></a></div><div style="color: blue;padding: 15px 50px 5px 50px;float: right;font-size: 16px;">Last access : 30 May 2014 &nbsp;<a href="#" class="btn btn-danger square-btn-adjust">Logout</a></div></nav></div><div class="navigation-left sidebar-nav-fixed"><nav role="navigation" class="navbar-default navbar-side"><div class="sidebar-collapse"><ul id="sidebar" class="nav list-group backbone-playground sidebar-menu"><li class="text-center"><img src="/public/css/images/backbone_logo.png" class="user-image img-responsive"/></li><li><a href="/home" class="active-menu"><i class="fa fa-home fa-lg">&nbsp&nbspHome</i></a></li><li><a href="/twoway"><i class="fa fa-desktop fa-lg">&nbsp&nbspTwo-Way Data Binding</i></a></li><li><a href="/customers"><i class="fa fa-qrcode fa-lg">&nbsp&nbspREST-API</i></a></li><li><a href="/"><i class="fa fa-bar-chart-o fa-lg">&nbsp&nbspStatistics</i></a></li><li><a href="/"><i class="fa fa-table fa-lg">&nbsp&nbspTables</i></a></li><li><a href="/"><i class="fa fa-edit fa-lg">&nbsp&nbspForms</i></a></li><li><a href="/"><i class="fa fa-sitemap fa-lg">Dropdown Demo</i><span class="fa arrow"></span><ul id="dropdown-menu" class="nav nav-second-level"><li><a href="/">Second Level Link</a></li><li><a href="/">Second Level Link</a></li></ul></a></li><li><a href="/"><i class="fa fa-square-o fa-lg">&nbsp&nbspBlank Page</i></a></li></ul></div></nav></div></div><section id="subview"></section><!--header-->\n</div></body>';
    };

    // preview.jade compiled template
    templatizer["preview"] = function tmpl_preview() {
        return '<div class="preview"><h3>Preview</h3><hr/><div class="preview firstName"></div><div class="preview lastName"></div><div class="preview email"></div><a href="http://www.web.de" target="_blank" class="preview homepage"></a></div>';
    };

    // twoway.jade compiled template
    templatizer["twoway"] = function tmpl_twoway() {
        return '<div class="container twoway"><div class="col-xs-6 col-sm-3 emptycolumn"></div><div class="col-xs-6 col-sm-3 useredit"></div><!--.col-xs-6.col-sm-3.emptycolumn--><div class="col-xs-6 col-sm-3 userpreview"></div></div>';
    };

    return templatizer;
}));