'use strict';
/* CONSTANTS */
/* Plugins and modules
 You can read about all the plugins at the official website */
const gulp = require('gulp');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');
const minCSS = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const doSass = require('gulp-sass');
const remember = require('gulp-remember');
const cached = require('gulp-cached');
const plumber = require('gulp-plumber');
const sourceMaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const typescript = require('gulp-typescript');
const ext_replace = require('gulp-ext-replace');
const doTS = typescript.createProject('tsconfig.json');

/* VARIABLES
 Please note that the values of the variables are specified WITHOUT the slashes at the edges,
 put in the process of concatenation (useful to implement incremental rebuild)! */
var frontend_css_path = 'frontend/css_source'; // Path to the SCSS files before changes
var production_css_path = 'css'; // Path to the CSS (SCSS => CSS) files after changes
var frontend_app_path = 'frontend/app_source'; // Path to the TS and HTML files before changes
var production_app_path = 'app'; // Path to the JS (TS => JS) and HTML files after changes

//Task build SCSS => CSS
gulp.task('buildCSS', function () {
    return gulp.src(frontend_css_path + '/**/*.scss') // Taking all the SCSS files from the specified directories
        .pipe(plumber({ // Using plumber to trace errors in process of task execution
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'buildCSS',
                    message: err.message
                };
            })
        }))
        .pipe(cached('buildCSS')) // Excluding the same files
        .pipe(sourceMaps.init()) // Initializing sourcemaps
        .pipe(debug({title: 'initSourceMaps'})) // Displaying the inscription about the latest ".pipe" 
        .pipe(remember('buildCSS')) // Remember condition
        .pipe(doSass()) // Building CSS files from SCSS
        .pipe(debug({title: 'SCSS => CSS'})) // Displaying the inscription about the latest ".pipe"
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false})) // Adding prefixes to CSS file
        .pipe(debug({title: 'addAutoPrefixer'})) // Displaying the inscription about the latest ".pipe"
        .pipe(concat('app.css')) // Concatenate all files in one
        .pipe(debug({title: 'concat'})) // Displaying the inscription about the latest ".pipe"
        // Function temporarily disabled for the debug and preview code
        //.pipe(minCSS()) // Сompressing CSS files
        //.pipe(debug({title: 'minify'})) // Displaying the inscription about the latest ".pipe"
        .pipe(sourceMaps.write()) // Writing sourcemaps
        .pipe(debug({title: 'writeSourceMaps'})) // Displaying the inscription about the latest ".pipe"
        .pipe(ext_replace('.css')) // Changing the extention from *.scss to *.css
        .pipe(debug({title: 'extReplace *.scss => *.css'})) // Displaying the inscription about the latest ".pipe"
        .pipe(gulp.dest(production_css_path)); // Recording the result files in the specified directory
});

//Task build TS => JS
gulp.task('buildJS', function () { 
    return gulp.src(frontend_app_path + '/**/*.ts') // Taking all the TS files from the specified directories
        .pipe(plumber({ // Using plumber to trace errors in process of task execution
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'buildJS',
                    message: err.message
                };
            })
        }))
        .pipe(cached('buildJS')) // Excluding the same files
        .pipe(sourceMaps.init()) // Initializing sourcemaps
        .pipe(debug({title: 'initSourceMaps'})) // // Displaying the inscription about the latest ".pipe"зацию сорсмап
        .pipe(remember('buildJS')) // Remember condition
        .pipe(typescript(doTS)) // Building JS from TS
        // Function temporarily disabled for the debug and preview code
        //.pipe(uglify()) // Сompressing JS files
        //.pipe(debug({title: 'minify'})) // Displaying the inscription about the latest ".pipe"
        .pipe(sourceMaps.write()) // Writing sourcemaps
        .pipe(debug({title: 'writeSourceMaps'})) // // Displaying the inscription about the latest ".pipe"
        .pipe(gulp.dest(production_app_path)); // Recording the result files in the specified directory
});

//Task build HTML
gulp.task('buildHTML', function () {
    return gulp.src(frontend_app_path + '/**/*.html') // Taking all the HTML files from the specified directories
    .pipe(gulp.dest(production_app_path)); // Taking all the TS files from the specified directories
});

//Main builder task
gulp.task('buildCSSJS', gulp.parallel('buildCSS', gulp.series('buildJS', 'buildHTML')));

//Watcher task
gulp.task('watch', function () {    
    gulp.watch(frontend_css_path + '/**/*.scss', gulp.series('buildCSS')) // Watcher looking for changes in specified directories and restarting build tasks
        .on('unlink', function (filepath) { // If one of the concatenated files will be removed, task rebuild file (!)
            remember.forget('buildCSS', path.resolve(filepath)); // The plugin will forget about deleted file and exclude it from main build file
            delete cached.caches.buildCSS[path.resolve(filepath)]; // But if we return the file back, build task will repeated, and the file incrementally(!) concatenated and successful return in the main build file
        });
    gulp.watch(frontend_app_path + '/**/*.*', gulp.series('buildJS', 'buildHTML')); // Watcher looks for changes in specified directories and restart build tasks
});

//Default "gulp" task
gulp.task('default', gulp.series('buildCSSJS', 'watch')); //Called "gulp" command