'use strict';
angular.module('TestApp')
.directive('subComponent', function() {
  return {
    controller: 'SubComponentController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/sub-component.view.html'
  };
});