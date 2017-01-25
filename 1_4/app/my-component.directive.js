'use strict';
angular.module('TestApp')
.directive('myComponent', function() {
  return {
    controller: 'MyComponentController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'app/my-component.view.html'
  };
});