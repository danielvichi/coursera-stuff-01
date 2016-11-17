(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

  $scope.separator = /\s*,\s*/;
  $scope.foodArray = '';
  $scope.feedback = '';

  // Caller stringSep form a Click
  $scope.clicker = function(){
    $scope.stringCondition = $scope.stringSep($scope.foodArray, $scope.separator);

    if ($scope.stringCondition.length <= 3 && $scope.stringCondition.length !== 0 ) {
      $scope.feedback = 'Enjoy!';
      console.log($scope.stringCondition.length);

    } else if ($scope.stringCondition.length == 0) {
      $scope.feedback = 'Please enter data first';
      console.log($scope.stringCondition.length);

    } else {
      $scope.feedback = 'Too Much!';
      console.log($scope.stringCondition.length);
    }

  }

  // Function that Separates Strings into Arrays
  $scope.stringSep = function (entryStr, someSep) {
    $scope.septdStr = entryStr.split(someSep);

    // Remove empty itens from the array
    $scope.septdStr = $scope.septdStr.filter(function(x){
      return (x !== (undefined || ''));
    });

    console.log($scope.septdStr);
    return $scope.septdStr;

  };

};

})();
