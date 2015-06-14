var API = require('hapi-dummy-api');

exports.options = {
         data:
            [
                {
                    "id": "53f8e46d41a37b5dc54dd92b",
                    "isActive": true,
                    "picture": "http://robohash.org/Kelly",
                    "age": 35,
                    "firstName": "Mckenzie",
                    "lastName": "Franco",
                    "gender": "male",
                    "company": "CYCLONICA",
                    "email": "mckenziefranco@cyclonica.com",
                    "phone": "+1 (848) 510-3828",
                    "street": "Emmons Avenue",
                    "streetNo": 7057,
                    "zipCode": 39767,
                    "city": "Sandston",
                    "state": "Illinois",
                    "country": "Finland",
                    "about": "Commodo exercitation amet anim cillum esse sint consectetur dolore culpa. Nisi consequat enim incididunt aliqua commodo id. Veniam officia eu sunt aliqua eiusmod quis culpa velit voluptate anim consectetur in sunt.\r\n",
                    "registered": "2014-02-18T01:12:17 -01:00",
                    "latitude": 89.53264,
                    "longitude": -43.857558,
                    "tags": [
                        "esse",
                        "elit",
                        "esse",
                        "consequat",
                        "proident",
                        "deserunt",
                        "cupidatat"
                    ]
                },
                {
                    "id": "53f8e46dabaaaf37beb437bb",
                    "isActive": true,
                    "picture": "http://robohash.org/Dona",
                    "age": 21,
                    "firstName": "Zamora",
                    "lastName": "Owens",
                    "gender": "male",
                    "company": "APPLIDECK",
                    "email": "zamoraowens@applideck.com",
                    "phone": "+1 (892) 411-3366",
                    "street": "Mayfair Drive",
                    "streetNo": 1315,
                    "zipCode": 36268,
                    "city": "Holcombe",
                    "state": "Hawaii",
                    "country": "Ethiopia",
                    "about": "Enim nostrud ad veniam culpa. Ex anim excepteur sint proident do anim voluptate reprehenderit aliquip. Duis non adipisicing fugiat culpa commodo pariatur dolore magna irure proident veniam anim ea consectetur.\r\n",
                    "registered": "2014-07-05T10:40:26 -02:00",
                    "latitude": 30.573413,
                    "longitude": -68.962823,
                    "tags": [
                        "aliquip",
                        "adipisicing",
                        "nulla",
                        "in",
                        "adipisicing",
                        "eiusmod",
                        "nulla"
                    ]
                },
                {
                    "id": "53f8e46d0c336a99832eceb5",
                    "isActive": true,
                    "picture": "http://robohash.org/Peck",
                    "age": 34,
                    "firstName": "Juliet",
                    "lastName": "Conner",
                    "gender": "female",
                    "company": "RUBADUB",
                    "email": "julietconner@rubadub.com",
                    "phone": "+1 (919) 494-3345",
                    "street": "Harwood Place",
                    "streetNo": 709,
                    "zipCode": 87033,
                    "city": "Riceville",
                    "state": "Florida",
                    "country": "Norway",
                    "about": "Anim minim deserunt enim duis do et velit amet. Mollit aliquip in enim quis exercitation minim ex commodo. Sit voluptate labore fugiat in nulla eiusmod ut proident ipsum pariatur adipisicing pariatur.\r\n",
                    "registered": "2014-02-12T18:30:15 -01:00",
                    "latitude": -43.029004,
                    "longitude": -101.700604,
                    "tags": [
                        "consectetur",
                        "ad",
                        "eu",
                        "ut",
                        "cupidatat",
                        "ad",
                        "et"
                    ]
                },
                {
                    "id": "53f8e46d56dc137d5540a7e8",
                    "isActive": true,
                    "picture": "http://robohash.org/Nunez",
                    "age": 61,
                    "firstName": "Marva",
                    "lastName": "Duran",
                    "gender": "female",
                    "company": "TECHTRIX",
                    "email": "marvaduran@techtrix.com",
                    "phone": "+1 (897) 448-3894",
                    "street": "George Street",
                    "streetNo": 3538,
                    "zipCode": 11278,
                    "city": "Nogal",
                    "state": "Vermont",
                    "country": "Suriname",
                    "about": "Dolore nisi sit in sint incididunt Lorem. Enim ex do excepteur fugiat veniam occaecat pariatur enim. Irure aute veniam velit esse pariatur eiusmod sint cupidatat sit.\r\n",
                    "registered": "2014-08-05T10:06:16 -02:00",
                    "latitude": -35.478965,
                    "longitude": 147.739641,
                    "tags": [
                        "irure",
                        "consectetur",
                        "non",
                        "quis",
                        "pariatur",
                        "ullamco",
                        "cillum"
                    ]
                },
                {
                    "id": "53f8e46dc9afcf94eb9da587",
                    "isActive": false,
                    "picture": "http://robohash.org/Shelton",
                    "age": 25,
                    "firstName": "Tamera",
                    "lastName": "Green",
                    "gender": "female",
                    "company": "ZENCO",
                    "email": "tameragreen@zenco.com",
                    "phone": "+1 (948) 478-3118",
                    "street": "Degraw Street",
                    "streetNo": 8704,
                    "zipCode": 33162,
                    "city": "Mappsville",
                    "state": "Virginia",
                    "country": "Angola",
                    "about": "Duis cupidatat est irure occaecat. Elit reprehenderit sit officia labore nulla. Officia amet ex ea magna duis qui. Et occaecat aliquip magna adipisicing veniam incididunt officia. Ad nostrud sunt eiusmod mollit esse. Adipisicing ipsum cillum ea dolore nostrud voluptate cillum non ut eu proident voluptate excepteur aute.\r\n",
                    "registered": "2014-07-21T04:22:55 -02:00",
                    "latitude": -44.986225,
                    "longitude": 137.860918,
                    "tags": [
                        "ullamco",
                        "consectetur",
                        "eiusmod",
                        "irure",
                        "aute",
                        "et",
                        "eiusmod"
                    ]
                }
        ],
        rootUrl: '/api/customers',
        idProperty: 'id',
        delay: 0,
        name: 'fake-customers-api',
        version: '0.0.1'
};