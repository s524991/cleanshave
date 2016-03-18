"use strict";
var Home_1 = require('./home/Home');
var About_1 = require('./about/About');
var Profile_1 = require('./profile/Profile');
var People_1 = require('./people/People');
var PersonDetail_1 = require('./people/PersonDetail');
var router_1 = require('angular2/router');
exports.Routes = {
    home: new router_1.Route({ path: '/', as: 'Home', component: Home_1.Home }),
    about: new router_1.Route({ path: '/about', as: 'About', component: About_1.About }),
    people: new router_1.Route({ path: '/people', as: 'People', component: People_1.People }),
    detail: new router_1.Route({ path: '/people/:id', as: 'Detail', component: PersonDetail_1.PersonDetail }),
    profile: new router_1.Route({ path: '/profile', as: 'Profile', component: Profile_1.Profile })
};
exports.APP_ROUTES = Object.keys(exports.Routes).map(function (r) { return exports.Routes[r]; });
