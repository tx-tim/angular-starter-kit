(function () {
  'use strict';

  angular.module('App.components.shop')
    .directive('itemdetail', ['dataservice', function (dataservice) {

    	var ddo = {
    		template: '<h4>Item Detail</h4>' +
                        '<span ng-show="!equipment.length > 0" class="glyphicon glyphicon-refresh glyphicon-spin"></span>' +
                        '<ul class="list-unstyled">'+
                            '<li>{{selectedItem.name}}</li>' +
                            '<li>{{selectedItem.description}}</li>' +
                        '</ul>',
    		link: function(scope) {
                scope.resource = dataservice;
                scope.equipment = scope.resource.equipment;
                scope.selectedItem = null;

                setSelected();

                scope.$watch('equipment', function(newVal, oldVal) {
                    setSelected();
                }, true);

                function setSelected() {
                    scope.selectedItem = scope.equipment.find(function(item) {
                        return item.selected===true;
                    });
                }
            }
    	};

    	return ddo;
    }]);
}());