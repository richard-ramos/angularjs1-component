'use strict';

angular.module('TestApp')
.controller('SubComponentController',
  function() {
    
	this.variable = "Variable inside subcomponent";
	
	this.sampleAction = function(title){
		alert(title);
	}
	
	
  }
);