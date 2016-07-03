(function () {
  'use strict';

  angular.module('App.components.shop')
    .directive('itemlist', function (dataservice, $q) {

    	var ddo = {
    		template: '<h4>item list</h4>' +
    					'<span ng-show="!equipment.length > 0" class="glyphicon glyphicon-refresh glyphicon-spin"></span>' +
  						'<ul class="list-unstyled">' +
					        '<li ng-repeat="item in equipment"><a class="text-info" href="" ng-click="selectItem(equipment, item)">{{item.name}}</a></li>' +
					    '</ul>',
    		link: function(scope) {
    			
    			scope.equipment = dataservice.getEquipment();
    			scope.selectItem = selectItem;

    			$q.when(scope.equipment).then(function(data) {
    				scope.equipment = data;
    				selectItem(scope.equipment, scope.equipment[0]);
    			})

    			function selectItem(list, item) {
    				list.forEach(function(i) {
    					i['selected'] = false;
    				});
    				item['selected'] = true;
    			}
    		}
    	};

    	return ddo;
    });
}());