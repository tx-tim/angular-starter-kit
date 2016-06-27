(function () {
  'use strict';

  angular.module('App.components.shop')
    .controller('shop', function ($scope, Query) {
      Query.equipment.get(function (res) {
        $scope.equipment = res.data.equipment;
      });
    });

}());