var API = require('hapi-dummy-api');

module.exports = new API({
   data: [
       {
           id: 0,
           firstName: 'Harris',
           lastName: 'Brakmic',
           email: 'brakmic@gmail.com',
           homepage: 'brakmic.de',
           picture: "http://robohash.org/Harris"
       },
       {
           id: 1,
           firstName: 'Hans',
           lastName: 'Dampf',
           email: 'hans@dampf.de',
           homepage: 'dampf.de',
           picture: "http://robohash.org/Hans"
       },
       {
           id: 2,
           firstName: 'Max',
           lastName: 'Mustermann',
           email: 'max@mustermann.de',
           homepage: 'mustermann.de',
           picture: "http://robohash.org/Max"
       },
    ],
    rootUrl: '/api/users',
    idProperty: 'id',
    delay: 0,
    name: 'fake-users-api',
    version: '0.0.1'
});
