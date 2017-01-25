'use strict';

angular.module('TestApp')
.controller('MyComponentController',
  function() {
    
	this.variable = "Mi Aplicacion";
	
	this.sampleAction = function(title){
		alert(title);
	}
	
	
  }
);