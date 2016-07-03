(function () {
  'use strict';

  angular.module('App.components.shop')
    .factory('dataservice', function (Query, $q, $timeout) {

      var equipmentList = [];

      function getEquipment() {
      	var deferred = $q.defer();

      	if(equipmentList.length > 0) {
      		deferred.resolve(equipmentList);
      	} else {
      		Query.equipment.get(function (res) {
		      	$timeout(function() {
		      		equipmentList = res.data.equipment;
		      		deferred.resolve(equipmentList);
		      	}, 2000);
      		});
      	}
      	return deferred.promise;
      }

      return {
      	equipment : equipmentList,
      	getEquipment: getEquipment
      }

    });
}());