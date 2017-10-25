(function () {
'use strict';

  angular.module('lab1', [])
  .controller('Lab1Controller', function ($scope) {
    $scope.input = "";

    $scope.deleteText = function () {
      $scope.input = "";
      document.getElementById('deleteButton').disabled = true;
    };

    $scope.enableButton = function () {
      if ($scope.input != "")
        document.getElementById('deleteButton').disabled = false;
      else
        document.getElementById('deleteButton').disabled = true;
    }

  });

})();
