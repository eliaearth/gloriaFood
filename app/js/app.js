'use strict';
var gloriaFoodApp = angular.module('gloriaFoodApp',['ngRoute', 'ngResource']);

gloriaFoodApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('food', {
          templateUrl: 'foodMenu/foodMenuView.html',
        }).
        when('food/:foodID', {
          templateUrl: 'foodMenu/foodItemsView.html',
        }).
        when('/',{
          templateUrl: 'foodMenu/foodMenuView.html',
        }).
        otherwise({
          redirectTo: 'food'
        });
    }
  ]);
  