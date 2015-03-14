'use strict';

var app = angular.module('app', [])

app.run(function($rootScope){
    $rootScope.user = "manojbadam";
    $rootScope.role = "Admin";
});