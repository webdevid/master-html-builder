'use strict';

const jshint = require('gulp-jshint');

const gulp = require('gulp');

const sass = require('gulp-sass'); // sass for css
const cssbeautify = require('gulp-cssbeautify'); // make css sass compile beauty
const autoprefixer = require('gulp-autoprefixer'); // css prefix for modern browser

const plumber = require('gulp-plumber'); // show up error
const notify = require('gulp-notify'); // notify for error

const browserSync = require('browser-sync'); // auto reload browser if any file changed

const sourcemaps = require('gulp-sourcemaps'); // debug scss code error

const nunjucksRender = require('gulp-nunjucks-render'); // temlate engine js -> html
const data = require('gulp-data'); // generate a data object from a variety of sources: json, front-matter, database

const gulpIf = require('gulp-if'); // if else condition for gulp //plugin to differentiate between these two files in order to output them in their correct folders
//// task

// image resize 
const imageResize = require('gulp-image-resize');
// rename file
const rename = require("gulp-rename");

const fs = require('fs'); //read the updated data.json 
const del = require('del'); // delete file / folder

// run gulp task sequence / berurutan
const runSequence = require('run-sequence');

// code standard js & scsss
const jscs = require('gulp-jscs');
const scssLint = require('gulp-scss-lint');
// auto fix jshint
const fixmyjs = require("gulp-fixmyjs");

// karma unit test 
const Server = require('karma').Server;

// merge all js / css to be one file.. to reduce http request
const useref = require('gulp-useref');

// minify html
const htmlminify = require("gulp-html-minify");

//other
const uglify = require('gulp-uglify');
const debug = require('gulp-debug');
const cached = require('gulp-cached');
const unCss = require('gulp-uncss');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const newer = require('gulp-newer');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');


gulp.task('hello',function(){
    console.log('Air Studio Engine Started');
});

function errorHandler(err) {
    // Logs out error in the command line 
    console.log(err.toString());
    // Ends the current pipe, so Gulp watch doesn't break 
    this.emit('end');
}

// Custom Plumber function for catching errors
function customPlumber(errTitle) { 
    return plumber({
        errorHandler: notify.onError({
            // Customizing error title
            title: errTitle || "Error running Gulp", 
            message: "Error: <%= error.message %>",
            sound: "Glass"
        }) 
    });
}

// Browser Sync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        browser: ["google chrome", "firefox"],
    });
});

// Compiles Sass to CSS
gulp.task('sass', function(){
return gulp.src('app/scss/*.scss')
    .pipe(customPlumber('Error Running Sass'))
    //.pipe(sourcemaps.init()) disable sementara
    .pipe(sass({
        precision: 2, // Sets precision to 2
        // includes bower_components as a import location 
        includePaths: ['app/bower_components']
    }).on('error', errorHandler))
    // make css auto beautifier
    .pipe(cssbeautify().on('error', errorHandler))
    // make css3 autoprefixer ( compability for crossbrowser)
    .pipe(autoprefixer({
        browsers: ['ie 8-9', 'last 2 versions'],
        cascade: false
    }).on('error', errorHandler))
    //.pipe(sourcemaps.write()) disable sementara
    // Output style.css in app/scss
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({stream: true }))
});

// Watchers files for changes
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', 
        ['sass'
        //, 'lint:scss'
    ]);
    gulp.watch('app/js/**/*.js', ['watch-js']);
    gulp.watch([
      'app/pages/**/*.+(html|nunjucks)',
      'app/templates/**/*',
      'app/data.json'
    ], ['nunjucks']);
  });
  
gulp.task('watch-js', ['lint:js'], browserSync.reload);

// Templating
gulp.task('nunjucks', function(){
    return gulp.src('app/pages/**/*.+(html|nunjucks)')
      .pipe(customPlumber('Error Running Nunjucks'))
      .pipe(data(function() {
        return JSON.parse(fs.readFileSync('./app/data.json'))
      }))
      .pipe(nunjucksRender({
        path: ['app/templates']
      }))
      .pipe(gulp.dest('app'))
      .pipe(browserSync.reload({
        stream: true
        }))
});

// Clean
gulp.task('clean:dev', function() {
    return del.sync([
      'app/css',
      'app/*.html'
    ]);
  });
  
// Consolidated dev phase task
gulp.task('default', function(callback) {
    runSequence(
      'clean:dev', 
      [
          //'sprites', 
          'lint:js', 
        //  'lint:scss'
        ], 
      ['sass', 'nunjucks'], 
      ['browserSync', 'watch'],
      callback
    );
});

// =============
// TESTING PHASE
// =============
// Consolidated dev phase task

// Linting JavaScript
gulp.task('lint:js', function (){ 
    return gulp.src('app/js/**/*.js') 
    // Catching errors with customPlumber 
    .pipe(customPlumber('JSHint Error'))
    .pipe(jshint()) 
    //.pipe(fixmyjs())
    // switching to jshint-stylish reporter 
    .pipe(jshint.reporter('jshint-stylish'))
    // Catching all JSHint errors 
    .pipe(jshint.reporter('fail'))
    // Adding JSCS to lint:js task 
    .pipe(jscs({
        // Fix errors
        fix: true,
        configPath: '.jscsrc'
    }))
    // .pipe(jscs())
	// .pipe(jscs.reporter())
    .pipe(gulp.dest('app/js'))
});

// Linting Scss
gulp.task('lint:scss', function() { 
    return gulp.src('app/scss/**/*.scss') 
    .pipe(scssLint({
        // Pointing to config file
        config: '.scss-lint.yml',
        maxBuffer: 3000000 * 1024
    }))
});

// Test
gulp.task('test', function(done) {
    new Server({
      configFile: process.cwd() + '/karma.conf.js',
      singleRun: true
    }, done).start();
});

// =================
// INTEGRATION PHASE
// =================

gulp.task('dev-ci', function(callback) {
    runSequence(
      'clean:dev', 
       [
            //'sprites', 
            'lint:js', 
            //'lint:scss'
        ], 
        ['sass', 'nunjucks'],
      callback
    );
})


// ==================
// OPTIMIZATION PHASE
// ==================

/**
 * concatenate Javascript files directly by referencing example in layout.nunjucks colaborate with gulp concat : 
 * <!-- build:<type> <path> -->
 * <script src="javascript.js"></script> 
 * <script src="files.js"></script> 
 * <script src="here.js"></script>
 * <!-- endbuild -->
 */
// JavaScript and CSS
gulp.task('useref', function() {
  
    return gulp.src('app/*.html')
      .pipe(useref())
      .pipe(cached('useref'))
      //.pipe(htmlmin({collapseWhitespace: true}))
      //.pipe(gulpIf('*.js', uglify()))
      //.pipe(gulpIf('*.css', cleanCSS()))
        // .pipe(gulpIf('*.css', unCss({
        // html: ['app/*.html'],
        // ignore: [
        //     '.susy-test',
        //     /.is-/,
        //     /.has-/
        // ]
        // })))
        //.pipe(rev()) disable sementara
        //.pipe(useref().restore())
        .pipe(useref())
        //.pipe(revReplace()) disable sementara
        //.pipe(htmlminify())
      .pipe(gulp.dest('dist'));
});

// Images (With Gulp-caches)
gulp.task('images', function() {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin(), {
    name: 'project'
    }))
    .pipe(gulp.dest('dist/images'))
})

// Clearing caches
gulp.task('cache:clear', function(callback) {
    return cache.clearAll(callback);
})

// Images (With Gulp Newer)
// gulp.task('images', function() {
//   return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
//     .pipe(newer('dist/images'))
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/images'))
// })

// Copying fonts
gulp.task('fonts', function() {
return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

// Cleaning (With gulp-cache)
gulp.task('clean:dist', function() {
    return del.sync(['dist']);
})

// Cleaning (with gulp-newer)
// gulp.task('clean:dist', function (callback) {
//   return del.sync([
//     'dist/**/*', 
//     '!dist/images',
//     '!dist/images/**/*'
//   ])
// })

gulp.task('build', function(callback) {
    runSequence(
        ['clean:dev', 'clean:dist'], 
        [
            //'sprites', 
            'lint:js', 
            //'lint:scss'
        ], 
        ['sass', 'nunjucks'], 
        ['useref', 'images', 'fonts',],
        callback
    );
});

//app/images/**/*.+(png|jpg|jpeg|gif|svg)
gulp.task("thumb", function (){
    gulp.src("app/images/bg/*.{jpg,png}")
    //.pipe(imagemin())
    .pipe(imageResize({ width : 1600 }))
    .pipe(rename(function (path) { path.basename += "-comingsoon"; }))
    .pipe(gulp.dest("app/images/bg-rocket"));
});

// ================
// DEPLOYMENT PHASE
// ================

// if (!process.env.CI) {
// gulp.task('rsync', function() {
//     rsync({
//     src: 'dist/',
//     // Keep dest in secrets.json
//     dest: 'username@server-address:public_html/path-to-project',
//     ssh: true,
//     recursive: true,
//     deleteAll: true

//     }, function(error, stdout, stderr, cmd) {
//     if (error) {
//         console.log(error.message);
//         console.log(stdout);
//         console.log(stderr);
//     }
//     });
// });

// var conn = ftp.create({
//     // Keep everything here in secrets.json
//     host: creds.server,
//     user: creds.username,
//     password: creds.password,
//     log: gutil.log
// });

// gulp.task('ftp-clean', function(cb) {
//     conn.rmdir('public_html/path-to-project', function(err) {
//     if (err) {
//         console.log(err);
//     }
//     });
// })

// gulp.task('ftp', function() {
//     return gulp.src('dist/**/*')
//     .pipe(conn.dest('public_html/path-to-project'));
// });

// gulp.task('gh-pages', function() {
//     return gulp.src('./dist/**/*')
//     .pipe(ghPages());
// });

// gulp.task('amazon', function() {
//     gulp.src('./dist/**/*')
//     .pipe(s3({
//         // Keep everything here in secrets.json
//         'key': 'Your-API-Key',
//         'secret': 'Your-AWS-Secret',
//         'bucket': 'Your-AWS-bucket',
//         'region': 'Your-region'
//     }));
// });
// }
  


