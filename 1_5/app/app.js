'use strict';

angular.module('TestApp', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
   
    $urlRouterProvider
      .otherwise('/main');

    $locationProvider.html5Mode(true);
    
  })
	  