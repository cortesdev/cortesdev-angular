 
 var myApp = angular.module('myApp',[]);
 
 //myApp.directive('myDirective', function() {});
 //myApp.factory('myService', function() {});
 
 function MyCtrl($scope) {
     $scope.procedures = [
         {
             definition: 'contact',
             discharges: 1,
             covered: 1,
             payments: 1
         }
         ];
 
 
 }
 
