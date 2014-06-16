'use strict';

/**
 * @ngdoc overview
 * @name instagramApp
 * @description
 * # instagramApp
 *
 * Main module of the application.
 */
angular
  .module('instagramApp', [
    'ngAnimate'
  ])
  .controller('inputCtrl', function($scope, $http) {
  	$scope.submitTag = function(tag) {
  		console.log("submit");
  		console.log(tag);
  		var url = "https://api.instagram.com/v1/tags/"+tag+"/media/recent";
  		var myId = "7179f77761ce4e1086daa3662bb621c2";
  		
  		
        $http({
            method: 'JSONP',
            url: url,
            params: {
            	callback: 'JSON_CALLBACK',
				client_id: myId
			}
        }).
        success(function(response) {
            $scope.results = response.data;
            
        }).
        error(function() {
            alert('error');
        })
  	}


  });
