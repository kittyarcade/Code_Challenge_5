console.log('sourced');

var myApp = angular.module('myApp',[]);

myApp.controller('Hoth',['$scope', '$http', function($scope, $http){
  console.log('totally angular dude');

  $scope.addHero = function(){
    console.log('button clicked');
    var heroAdded = {
      alias: $scope.aliasIn,
      first_name: $scope.fNameIn,
      last_name: $scope.lNameIn,
      city: $scope.cityIn,
      power_name: $scope.powerIn
    };
    console.log('hero added: ', heroAdded);
    $http({
      method:'POST',
      url: '/hero',
      data: heroAdded
    }).then(function(response){
      console.log('POST response: ', response);
    });
    clearForms();
    $scope.find();
  };//end addHero function

  $scope.find = function(){
   $http({
     method: 'GET',
     url: '/hero'
   }).then(function(response){
     console.log('GET response: ', response.data);
     $scope.collection = response.data;
   });
 };//end find function//end find

  var clearForms = function(){
      $scope.aliasIn='';
      $scope.fNameIn='';
      $scope.lNameIn='';
      $scope.cityIn='';
      $scope.powerIn='';
    };
}]); //end myApp controller
