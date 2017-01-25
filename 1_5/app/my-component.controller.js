'use strict';

angular.module('TestApp')
.controller('MyComponentController',
  function() {
    
	this.variable = "Variable value inside MyComponentController";
	
	this.sampleAction = function(title){
		alert(title);
	}
	
	
  }
);