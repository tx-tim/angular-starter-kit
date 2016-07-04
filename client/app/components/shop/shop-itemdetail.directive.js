(function () {
  'use strict';

  angular.module('App.components.shop')
    .directive('itemdetail', ['dataservice', function (dataservice, $q) {

    	var ddo = {
    		template: '<h4>Item Detail</h4>' +
                        '<span ng-show="!equipment.length > 0" class="glyphicon glyphicon-refresh glyphicon-spin"></span>' +
                        '<ul class="list-unstyled">'+
                            '<li>{{selectedItem.name}}</li>' +
                            '<li>{{selectedItem.description}}</li>' +
                        '</ul>',
    		link: function(scope) {
                scope.equipment = dataservice.getEquipment().then(function(data) {
                    return data;
                });

                scope.$watch("equipment", function(newVal, oldVal){ 
                    showSelected(newVal);
                }, true);

                function showSelected(list) {
                    if(!(list.length)) {
                        return;
                    }
                    var foundIndex = 0;

                    foundIndex = list.findIndex(function(item) {
                        return item.selected === true;
                    }) 

                    scope.selectedItem = list[foundIndex]
                }
            }
    	};

    	return ddo;
    }]);
}());