(function () {
  'use strict';

  angular.module('App')
    .service('Query', function ($resource, Config) {
      return {
        test: $resource(Config.apiPath + 'test', {}, {
          get: {method: 'GET'}
        }),
        equipment: $resource(Config.apiPath + 'equipment', {}, {
          get: {method: 'GET'}
        }),
      };
    });

}());