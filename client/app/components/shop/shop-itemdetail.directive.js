(function () {
  'use strict';

  angular.module('App.components.shop')
    .directive('itemdetail', ['dataservice', function (dataservice) {

    	var ddo = {
    		template: '<h4>Item Detail</h4>' +
                        '<span ng-show="!equipment.length > 0" class="glyphicon glyphicon-refresh glyphicon-spin"></span>' +
                        '<ul class="list-unstyled">'+
                            '<li>Show item detail here</li>' +
                        '</ul>',
    		link: function(scope) {

            }
    	};

    	return ddo;
    }]);
}());