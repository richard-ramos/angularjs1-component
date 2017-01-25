'use strict';

angular.module('TestApp')
.controller('SubComponentController',
  function() {
    
	this.myVar = "Variable inside subcomponent";

	this.sampleAction = function(title){
		alert(title);
	}
	
	
  }
);