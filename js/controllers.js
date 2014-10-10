'use strict';

angular.module('styleGuideApp.controllers')
  .controller('ReadeMeCtrl', ['$scope',
    function($scope) {

    }
  ])
  .controller('ComponentsCtrl', ['$scope', '$routeParams', '$timeout',
    function($scope, $routeParams, $timeout) {

      $scope.activeComponent = $routeParams.id ? $routeParams.id : 'action-bar';

      $scope.sample = { fontSize: 12 };

      $scope.background = {};

      $scope.getTemplate = function (id) {
        // $scope.uiComponents[]
      };

      $scope.uiComponents = {
        'action-bar': {
          title: 'Action-bar',
          template: 'components/bootstrap-based/action-bar.html'
        },
        'typeahead-multiselect': {
          title: 'Typeahead Multiselect',
          template: 'components/bootstrap-based/ui-select2.html'
        },
        'alignment': {
          title: 'Alignment',
          template: 'libs/widget-settings-ui-components/demos/alignment-demo.html'
        },
        'color-picker': {
          title: 'Color Picker',
          template: 'libs/widget-settings-ui-components/demos/color-picker-demo.html'
        },
        'column-selector': {
          title: 'Column Selector',
          template: 'libs/widget-settings-ui-components/demos/column-selector-demo.html'
        },
        'financial-selector': {
          title: 'Financial Selector',
          template: 'libs/component-financial-selector/demos/financial-selector-demo.html'
        },
        'scroll-setting': {
          title: 'Scroll Setting',
          template: 'libs/widget-settings-ui-components/demos/scroll-setting-demo.html'
        },
        'table-setting': {
          title: 'Table Setting',
          template: 'libs/widget-settings-ui-components/demos/table-setting-demo.html'
        },
        'tooltip': {
          title: 'Tooltip (DEPRECATED)',
          template: 'libs/widget-settings-ui-components/demos/tooltip-demo.html'
        },
        'ui-popover': {
          title: 'UI Popover',
          template: 'components/bootstrap-based/ui-popover.html'
        },
        'font-setting': {
          title: 'Font Setting',
          template: 'libs/widget-settings-ui-components/demos/font-setting-demo.html'
        },
        'font-style': {
          title: 'Font Style',
          template: 'libs/widget-settings-ui-components/demos/font-style-demo.html'
        },
        'placeholder': {
          title: 'Placeholder Text',
          template: 'components/bootstrap-based/placeholder.html'
        },
        'buttons': {
          title: 'Standard Buttons',
          template: 'components/bootstrap-based/buttons.html'
        },
        'edit-button': {
          title: 'Edit Button',
          template: 'components/bootstrap-based/edit-button.html'
        },
        'google-spreadsheet-controls': {
          title: 'Google Spreadsheet Controls',
          template: 'libs/component-google-spreadsheet-controls/demos/example.html'
        },
        'url-field': {
          title: 'URL Field',
          template: 'libs/widget-settings-ui-components/demos/url-field-demo.html'
        },
        'google-drive-picker': {
          title: 'Google Drive Picker',
          template: 'libs/component-google-drive-picker/demos/example.html'
        },
        'loading-spinner': {
          title: 'Loading Spinner',
          template: 'libs/rv-loading/demo.html'
        },
        'font-size-picker': {
          title: 'Font Size Picker',
          template: 'libs/bootstrap-form-components/demos/font-size-picker-demo.html'
        },
        'font-picker': {
          title: 'Font Picker',
          template: 'libs/bootstrap-form-components/demos/font-picker-demo.html'
        },
        'background-setting': {
          title: 'Background Setting',
          template: 'libs/widget-settings-ui-components/demos/background-demo.html'
        },
        'close-button': {
          title: 'Close Button',
          template: 'components/bootstrap-based/close-button.html'
        },
        'widget-icons': {
          title: 'Widget Icons',
          template: 'components/bootstrap-based/widget-icons.html'
        },
        'units': {
          title: 'Units',
          template: 'components/bootstrap-based/units.html'
        },
        'storage-selector': {
          title:'Storage Selector',
          template:'libs/component-storage-loader/demo/demo.html'
        },
        'subscription-status': {
          title:'Subscription Status',
          template:'libs/component-subscription-status/demos/subscription-status-demo.html'
        },
        'app-subscription-status': {
          title:'App Subscription Status',
          template:'libs/component-subscription-status/demos/app-subscription-status-demo.html'
        },
        'github-src-button': {
          title:'Github Source Button',
          template:'components/bootstrap-based/github-src-button.html'
        },
        'info-button': {
          title: 'Info Button',
          template:'components/bootstrap-based/info-button.html'
        },
        'modal': {
            title: 'Modal',
            template: 'components/bootstrap-based/modal.html'
        },
        'search-bar': {
          title: 'Search Bar',
          template:'components/bootstrap-based/search-bar.html'
        },
        'widget-button-toolbar': {
          title: 'Widget Button Toolbar',
          template:'libs/widget-settings-ui-components/demos/widget-button-toolbar-demo.html'
        }
      };

      $scope.things = ['Spectacles', 'Giraffe', 'Turtle', 'Shark', 'Lamp', 'Chocolate', 'Beef', 'Drawer', 'Brocolli', 'Tomato', 'Plate', 'Zebra'];

      $scope.color = "transparent";
      $scope.columnNames = [
        {
          id: "instrument",
          name: "columns.instrument",
          type: "text"
        },
        {
          id: "instrument-logo",
          name: "columns.instrument-logo",
          type: "text"
        },
        {
          id: "last-price",
          name: "columns.last-price",
          type: "int"
        },
        {
          id: "change",
          name: "columns.change",
          type: "int"
        },
        {
          id: "percent-change",
          name: "columns.percent-change",
          type: "int"
        },
        {
          id: "day-high",
          name: "columns.day-high",
          type: "int"
        },
        {
          id: "day-low",
          name: "columns.day-low",
          type: "int"
        }
      ];
      $scope.columns = [
        {
          id: "instrument",
          alignment: "right"
        },
        {
          id: "instrument-logo"
        }
      ];
      $scope.scroll = {};
      $scope.table = {};
      $scope.instruments = [
        "AA.N",
        "AXP.N",
        "BA.N",
        "BAC.N",
        "CAT.N",
        "CSCO.O",
        "CVX.N",
        "MMM.N",
        "MRK.N",
        "MSFT.O",
        "PFE.N",
        "PG.N",
        "T.N",
        "TRV.N",
        "UTX.N",
        "VZ.N",
        "WMT.N",
        "XOM.N"
      ];
      $scope.font = {
      };

      $scope.dynamicTooltip = 'Hello, World!';
      $scope.dynamicTooltipText = 'dynamic';
      $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';


      $scope.alignText = 'right';
      $scope.spreadsheet = {};

      // $scope.defaultSpinnerOptions = {
      //   lines: 12, // The number of lines to draw
      //   length: 20, // The length of each line
      //   width: 10, // The line thickness
      //   radius: 30, // The radius of the inner circle
      //   corners: 1, // Corner roundness (0..1)
      //   rotate: 0, // The rotation offset
      //   direction: 1, // 1: clockwise, -1: counterclockwise
      //   color: "#555", // #rgb or #rrggbb or array of colors
      //   speed: 1, // Rounds per second
      //   trail: 60, // Afterglow percentage
      //   shadow: false, // Whether to render a shadow
      //   hwaccel: false, // Whether to use hardware acceleration
      //   className: "spinner", // The CSS class to assign to the spinner
      //   zIndex: 2e9, // The z-index (defaults to 2000000000)
      //   top: "50%", // Top position relative to parent in px
      //   left: "50%" // Left position relative to parent in px
      // };

      // $scope.startSpinner = function () {
      //   $loading.start(["rv-loading-spinner-demo"]);
      // };

      // $scope.stopSpinner = function () {
      //   $loading.stop(["rv-loading-spinner-demo"]);
      // };

      // // Global Spinner
      // $loading.startGlobal("some-job-key");
      // $timeout(function() {
      //   $loading.stopGlobal("some-job-key");
      // }, 1000);

      $scope.update = function () {
        $scope.$broadcast('collectAdditionalParams');
      };

      $scope.storageClientSource = 'angular';//example code to show on storage selector page
    }
  ]);
