

// Load all the modules from package.json
var gulp = require( 'gulp' ),
  plumber = require( 'gulp-plumber' ),
  autoprefixer = require('gulp-autoprefixer'),
  watch = require( 'gulp-watch' ),
  livereload = require( 'gulp-livereload' ),
  jshint = require( 'gulp-jshint' ),
  stylish = require( 'jshint-stylish' ),
  uglify = require( 'gulp-uglify' ),
  rename = require( 'gulp-rename' ),
  notify = require( 'gulp-notify' ),
  include = require( 'gulp-include' ),
  sass = require( 'gulp-sass' ),
  imagemin = require('gulp-imagemin'),
  bower = require('gulp-bower'),
  zip = require('gulp-zip');


function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

  // sassImage = require('gulp-sass-image');

var config = {
     bowerDir: './bower_components' 
}



// Default error handler
var onError = function( err ) {
  console.log( 'An error occured:', err.message );
  this.emit('end');
}

gulp.task('zip', function () {
 return gulp.src([
   '*',
   './inc/*',
   './js/**/*',
   './languages/*',
   './sass/**/*',
   './template-parts/*',
   './templates/*',
   '!bower_components',
   '!node_modules',
  ], {base: "."})
  .pipe(zip('paxlife.zip'))
  .pipe(gulp.dest('.'));
});

// Install all Bower components
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(config.bowerDir))
});


// Jshint outputs any kind of javascript problems you might have
// Only checks javascript files inside /src directory
gulp.task( 'jshint', function() {
  return gulp.src( './js/src/*.js' )
    .pipe( jshint() )
    .pipe( jshint.reporter( stylish ) )
    .pipe( jshint.reporter( 'fail' ) );
})


// Concatenates all files that it finds in the manifest
// and creates two versions: normal and minified.
// It's dependent on the jshint task to succeed.
gulp.task( 'scripts', ['jshint'], function() {
  return gulp.src( './js/manifest.js' )
    .pipe( include() )
    .pipe( rename( { basename: 'scripts' } ) )
    .pipe( gulp.dest( './js/dist' ) )
    // Normal done, time to create the minified javascript (scripts.min.js)
    // remove the following 3 lines if you don't want it
    .pipe( uglify() )
    .pipe( rename( { suffix: '.min' } ) )
    .pipe( gulp.dest( './js/dist' ) )
    .pipe(notify({ message: 'scripts task complete' }))
    .pipe( livereload() );
} );

// Different options for the Sass tasks
var options = {};
options.sass = {
  errLogToConsole: true,
  precision: 8,
  noCache: true,
  //imagePath: 'assets/img',
};

options.sassmin = {
  errLogToConsole: true,
  precision: 8,
  noCache: true,
  outputStyle: 'compressed',
  includePaths: [
    config.bowerDir + '/bootstrap-sass/assets/stylesheets',
    // config.bowerDir + '/material-design-lite/src',
    // config.bowerDir + '/fontawesome/scss',
  ]
  //imagePath: 'assets/img',
};

// Sass STYLE
gulp.task('sass', function() {
    return gulp.src('./sass/style.scss')
        .on('error', swallowError)
        .pipe(plumber())
        .pipe(sass(options.sass))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'))
        .pipe(notify({ title: 'Sass', message: 'sass task complete'  }));
});

// Sass-min - Release build minifies CSS after compiling Sass
gulp.task('sass-min', function() {
    return gulp.src('./sass/style.scss')
        .on('error', swallowError)
        .pipe(plumber())
        .pipe(sass(options.sassmin))
        .pipe(autoprefixer())
        .pipe( rename( { suffix: '.min' } ) )
        .pipe(gulp.dest('./css'))
        .pipe(notify({ title: 'Sass', message: 'sass-min task complete' }));
});



// Start the livereload server and watch files for change
gulp.task( 'watch', function() {
  livereload.listen();

  // don't listen to whole js folder, it'll create an infinite loop
  gulp.watch( [ './js/**/*.js', '!./js/dist/*.js' ], [ 'scripts' ] )

  gulp.watch( './sass/**/*.scss', ['sass', 'sass-min'] );

  // gulp.watch('./images/**/*', ['images']);

  gulp.watch( './**/*.php' ).on( 'change', function( file ) {
    // reload browser whenever any PHP file changes
    livereload.changed( file );
  } );
} );






// END Sass Style (ONLY WHEN PROJECT IS READY)

// // Optimize Images
// gulp.task('images', function() {
//   return gulp.src('./images/**/*')
//     .pipe(imagemin({ progressive: true, svgoPlugins: [{removeViewBox: false}]}))
//     .pipe(gulp.dest('./images'))
//     .pipe(notify({ message: 'Images task complete' }));
// });


// // sass-image

// var paths = {
//     images: 'images/**/*.+(jpeg|jpg|png|gif|svg)',
//     sass: 'sass/**/*.scss'
// };


// gulp.task('sass-image', function (cb) {
//     return gulp.src(paths.images)
//             .pipe(sassImage({
//                 // targetFile: '_generated-imagehelper.scss', // default target filename is '_sass-image.scss'
//                 // template: 'your-sass-image-template.mustache',
//                 images_path: './images/',
//                 css_path: './css/',
//                 http_images_pat: "",
//                 prefix: 'icon--'
//             }))
//             .pipe(gulp.dest('sass'));
// });

// gulp.task('sass', function (cb) {
//     return gulp.src('sass/main.scss')
//             .pipe(sass({ errLogToConsole: true }))
//             .pipe(gulp.dest('../css/'));
// });






// SASS IMAGE

// gulp.task('default', ['watch', 'sass-image'], function() {
//     gulp.watch(paths.images, ['sass-image']);
//     gulp.watch(paths.sass, ['sass']);
// });

// IMAGES SHRINK

// gulp.task('default', ['watch', 'images'], function() {
//   // place code for your default task here
// });


// WATCH

gulp.task('default', ['watch'], function() {
  // place code for your default task here
});
