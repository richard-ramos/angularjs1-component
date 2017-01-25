'use strict';

angular.module('TestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/main.view.html'
		// If you don't want to have a main view file, or 
		// in case you have a main component you can specify
		// template: '<my-component></my-component>'
      });
  });