var exec = require('child_process').exec;


var CoffeeTranspiler = function(cake, build){
    exec(cake + " " + build,
        function (error, stdout, stderr) {
            if(stdout) console.log('compiling coffescript sources. ' + stdout);
            if(stderr) console.log('ERROR while compiling coffescript sources: ' + stderr);
            if(error) console.log('CoffeeScript compile error: ' + error);
        });
}

module.exports = CoffeeTranspiler;
