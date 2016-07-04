(function () {
  'use strict';

  angular.module('App.components.shop')
    .directive('itemlist', function (dataservice) {

    	var ddo = {
    		template: '<h4>item list</h4>' +
    					'<span ng-show="!equipment.length > 0" class="glyphicon glyphicon-refresh glyphicon-spin"></span>' +
  						'<ul class="list-unstyled">' +
					        '<li ng-repeat="item in equipment"><a>{{item.name}}</a></li>' +
					    '</ul>',
    		link: function(scope) {
    			dataservice.getEquipment().then(function(data) {
                    scope.equipment = data;
                });
    		}
    	};

    	return ddo;
    });
}());