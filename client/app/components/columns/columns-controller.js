(function () {
  'use strict';

  angular.module('App.components.columns')
    .controller('columns', function ($scope, Query) {
      Query.test.get(function (res) {
        $scope.text = res.data;
      });
    });

}());