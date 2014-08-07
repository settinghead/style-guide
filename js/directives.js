'use strict';

angular.module('styleGuideApp.directives')
  .directive('navbar', [

    function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/navbar.html'
      };
    }
  ]);