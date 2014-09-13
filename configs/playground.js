//main config for Backbone Playground
//it's just a complete copy of original settings from dev_config.js
//with this file we avoid the usage of a module called "getconfig"
module.exports = {
        root: "./configs",
        isDev: true,
        isSecure: false,
        session: {
            host: "localhost",
            port: 6379,
            db: 1,
            secret: "play!",
            secure: false
        },
        http: {
            listen: "localhost",
            port: 3000
        },
        client: {
            apiUrl: "http://localhost:3000",
            debugMode: true
        },
        templates: {
            rootDir: "templates"
        },
        coffeescript: {
            compile: true
        }
};
