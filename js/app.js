'use strict';

angular.module('styleGuideApp.controllers', []);
angular.module('styleGuideApp.directives', []);

angular.module('styleGuideApp', [
  'ngRoute',
  'ngSanitize',
  'hljs',
  'ui.select2',
  'styleGuideApp.controllers',
  'styleGuideApp.directives',
  'risevision.widget.common',
  'risevision.widget.common.alignment',
  'risevision.widget.common.color-picker',
  'risevision.widget.common.financial',
  'risevision.widget.common.tooltip',
  'risevision.widget.common.font-setting',
  'risevision.widget.common.scroll-setting',
  'risevision.widget.common.column-selector',
  'risevision.widget.common.table-setting',
  'risevision.widget.common.google-spreadsheet-controls',
  'risevision.widget.common.storage-client-loader',
  'risevision.widget.common.url-field',
  'risevision.widget.common.google-drive-picker',
  'risevision.widget.common.background-setting',
  'risevision.widget.common.widget-button-toolbar',
  'risevision.common.loading',
  'risevision.widget.common.fontpicker',
  'risevision.widget.common.fontsizepicker',
  'risevision.widget.common.translate',
  'risevision.widget.common.subscription-status'
])
  .config(function(hljsServiceProvider) {
    hljsServiceProvider.setOptions({
      // replace tab with 2 spaces
      tabReplace: '  '
    });
  })
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'ReadeMeCtrl',
          templateUrl: 'partials/read-me.html'
        })
        .when('/input', {
          templateUrl: 'partials/input-guidelines.html'
        })
        .when('/componentdemo', {
          templateUrl: 'partials/component-demo.html'
        })
        .when('/components', {
          controller: 'ComponentsCtrl',
          templateUrl: 'partials/components.html'
        })
        .when('/components/:id', {
          controller: 'ComponentsCtrl',
          templateUrl: 'partials/components.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       'self',
       'http://*.risevision.com/**'
     ])
   })
  .config(["$translateProvider", function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: "locales/",
      suffix: "/translation.json"
    });
    $translateProvider.determinePreferredLanguage();
    if($translateProvider.preferredLanguage().indexOf("en_") === 0){
      //default to "en" on any of the English variants
      $translateProvider.preferredLanguage("en");
    }
  }]);
