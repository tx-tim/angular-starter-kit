(function () {
  'use strict';

  angular.module('App')
    .config(function ($routeProvider, Config) {
      $routeProvider
        .when('/home', {
          templateUrl: Config.rootPath + 'components/home/home-view.html',
          controller: 'home'
        })
        .when('/seed-help', {
          templateUrl: Config.rootPath + 'components/seed-help/seed-help-view.html',
          controller: 'seedHelp'
        })
        .when('/columns', {
          templateUrl: Config.rootPath + 'components/columns/columns-view.html',
          controller: 'columns'
        })
        .when('/shop', {
          templateUrl: Config.rootPath + 'components/shop/shop-view.html',
        })
        .otherwise({
          redirectTo: '/home'
        });
    });

}());