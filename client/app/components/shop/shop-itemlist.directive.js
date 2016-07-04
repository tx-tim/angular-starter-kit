(function () {
  'use strict';

  angular.module('App.components.shop')
    .directive('itemlist', function (dataservice) {

    	var ddo = {
    		template: '<h4>item list</h4>' +
    					'<span ng-show="!equipment.length > 0" class="glyphicon glyphicon-refresh glyphicon-spin"></span>' +
  						'<ul class="list-unstyled">' +
					        '<li ng-repeat="item in equipment"><a ng-click="selectItem(item)">{{item.name}}</a></li>' +
					    '</ul>',
    		link: function(scope) {

                scope.selectItem = selectItem;
    			dataservice.getEquipment().then(function(data) {
                    scope.equipment = data;
                    scope.selectItem();
                });

                function selectItem(item) {
                    if(!item) {
                        item = scope.equipment[0];
                    } else {
                        scope.equipment.forEach(function(i) {
                            i.selected = false;
                        });
                    }
                    item.selected = true;
                }
                
    		}
    	};

    	return ddo;
    });
}());