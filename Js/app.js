'use strict';

var app = angular.module('app', [])

app.run(function($rootScope){
    $rootScope.user = "manojbadam";
    $rootScope.role = "Admin";
});

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from outer templates domain.
    'http://http//localhost:5433/postMatchPred',
  ]); 
});