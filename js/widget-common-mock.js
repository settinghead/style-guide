var i18n = {
  t: function(value) {
    return value;
  }
};

angular.module("risevision.widget.common", ["risevision.widget.common.translate"]);

angular.module("risevision.widget.common.translate", ["pascalprecht.translate"])
  .service("i18nLoader", function () {
    this.get = function () {
      return { then: function(cb) { cb(); }};
    };
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
