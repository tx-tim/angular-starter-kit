(function () {
  'use strict';

  angular.module('App.components.shop')
    .controller('shop', function ($scope, Query, $timeout) {
      Query.equipment.get(function (res) {
      	$timeout(function() {
      		$scope.equipment = res.data.equipment;
      	}, 2000);
      });
    });
}());