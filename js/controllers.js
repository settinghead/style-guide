'use strict';

angular.module('styleGuideApp.controllers')
  .controller('ReadeMeCtrl', ['$scope',
    function($scope) {

    }
  ])
  .controller('CommonHeaderCtrl', ['$scope',
    function($scope) {
      $scope.authStatus = 1;
      $scope.isAdmin = true;
      // Company
      $scope.companyLoaded = true;
      $scope.selectedCompanyName = 'Rise Vision';
      $scope.subCompanySelected = true;
      // User
      $scope.userProfileName = 'Alfredo Sanchez';
      $scope.userProfileEmail = 'alfredo.sanchez90@example.com';
      $scope.userProfilePicture = 'http://api.randomuser.me/portraits/med/men/33.jpg';
      // Messages
      $scope.messages = ['<li class="system-message">Lorem ipsum dolor sit amet</li>', '<li class="system-message">Consectetur adipiscing elit</li>', '<li class="system-message">Suspendisse convallis leo sed</li>'];
      // Navigation choices
      $scope.navOptions = [{
        title: 'Store',
        link: ''
      }, {
        title: 'Account',
        link: ''
      }, {
        title: 'Sellers',
        link: ''
      }, {
        title: 'Platform',
        link: 'http://rva.risevision.com/',
        target: '_blank'
      }];
    }
  ])
  .controller('ComponentsCtrl', ['$scope', '$routeParams', '$loading',
    function($scope, $routeParams, $loading) {

      $scope.activeComponent = $routeParams.id ? $routeParams.id : 'action-bar';

      $scope.sample = { fontSize: 12 };

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
          title: 'Tooltip',
          template: 'libs/widget-settings-ui-components/demos/tooltip-demo.html'
        },
        'font-style': {
          title: 'Font Style',
          template: 'libs/widget-settings-ui-components/demos/font-style-demo.html'
        },
        'placeholder': {
          title: 'Placeholder Text',
          template: 'components/bootstrap-based/placeholder.html'
        },
        'loading': {
          title: 'Loading Spinner (Basic)',
          template: 'components/bootstrap-based/loading.html'
        },
        'buttons': {
          title: 'Standard Buttons',
          template: 'components/bootstrap-based/buttons.html'
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
        'loading-spinner-fancy': {
          title: 'Loading Spinner (Fancy)',
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
        'storage-selector': {
          title: 'Storage Selector',
          template: 'libs/storage-selector/style-guide-demo/example.html'
        }
      };

      $scope.things = ['Spectacles', 'Giraffe', 'Turtle', 'Shark', 'Lamp', 'Chocolate', 'Beef', 'Drawer', 'Brocolli', 'Tomato', 'Plate', 'Zebra'];

      $scope.color = "transparent";
      $scope.columnNames = [
        {
          name: "instrument",
          type: "text"
        },
        {
          name: "instrument-logo",
          type: "text"
        },
        {
          name: "last-price",
          type: "int"
        },
        {
          name: "change",
          type: "int"
        },
        {
          name: "percent-change",
          type: "int"
        },
        {
          name: "day-high",
          type: "int"
        },
        {
          name: "day-low",
          type: "int"
        }
      ];
      $scope.columns = [
        {
          name: "instrument",
          alignment: "right"
        },
        {
          name: "instrument-logo"
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

      $scope.alignText = 'right';
      $scope.spreadsheet = {};

      $scope.defaultSpinnerOptions = {
        lines: 12, // The number of lines to draw
        length: 20, // The length of each line
        width: 10, // The line thickness
        radius: 30, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: "#555", // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: "spinner", // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: "28%", // Top position relative to parent in px
        left: "50%" // Left position relative to parent in px
      };

      $scope.startSpinner = function () {
        $loading.start(["rv-loading-spinner-demo"]);
      };

      $scope.stopSpinner = function () {
        $loading.stop(["rv-loading-spinner-demo"]);
      };

      $scope.update = function () {
        $scope.$broadcast('collectAdditionalParams');
      };
    }
  ]);
