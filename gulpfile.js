var gulp = require('gulp');
var connect = require('gulp-connect');
var jsoncombine = require("gulp-jsoncombine");
var colors = require('colors');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');
var clean = require('gulp-clean');


gulp.task('pickFromBower', function() {
  return gulp.src(mainBowerFiles(), {
      base: './bower_components',
    })
    .pipe(gulp.dest('./libs'));
});

gulp.task("json-move", function() {
  // in case some files have the same name
  var index = 0;
  return gulp.src(["src/locales/en/*.json",
    "bower_components/*/dist/locales/en/*.json"])
    .pipe(rename(function (path) {
      path.dirname = "";
      path.basename += index++;
    }))
    .pipe(gulp.dest("./tmp/locales/en"));
});

gulp.task("json-combine", ["json-move"], function() {
  return gulp.src("./tmp/locales/en/*.json")
    .pipe(jsoncombine("translation.json",function(data) {
      var jsonString,
        newData = {};

      for (var filename in data) {
        var fileObject = data[filename];
        for (var attrname in fileObject) {
          newData[attrname] = fileObject[attrname];
        }
      }

      jsonString = JSON.stringify(newData, null, 2);
      return new Buffer(jsonString);
    }))
    .pipe(gulp.dest("./locales/en"));
});

gulp.task('refreshCSS', function() {
  return gulp.src('./bower_components/rv-style-guide/dist/css/**.css')
    .pipe(gulp.dest('./libs/rv-style-guide/dist/css'))
    .pipe(connect.reload());
});

gulp.task('dev', function() {
  // Start a server
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);
  // Watch HTML files for changes
  console.log('[CONNECT] Watching HTML files for live-reload'.blue);
  watch({
    glob: ['./components/**/*.html', './components/**/*.js', './libs/**/*.html', './libs/**/*.js', './partials/**/*.html', './js/**/*.js', './libs/**/*.js', './index.html']
  })
    .pipe(connect.reload());

  gulp.watch('./bower_components/rv-style-guide/dist/css/rise.min.css', ['refreshCSS']);
  gulp.watch('./bower_components/storage-selector/style-guide-demo/example.html', ['pickFromBower']);
});

gulp.task('default', [], function() {
  console.log('***********************'.yellow);
  console.log('  gulp dev: start a server in the folder and watch LESS files'.yellow);
  console.log('  gulp pickFromBower: pick main files from bower for github pages'.yellow);
  console.log('  gulp json-combine:  i18n'.yellow);
  console.log('***********************'.yellow);
  return true;
});
