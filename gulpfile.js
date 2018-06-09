var gulp = require('gulp'),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  inject = require('gulp-inject'),
  gulpif = require('gulp-if'),
  cssnano = require('gulp-cssnano');

gulp.task('buildMainPages', function buildHTML() {
  var pages = ['contact', 'cv', 'realizacje', 'projects', 'index'],
    src = 'src/',
    dest = '/';
  
  handleInjection(pages, src, dest, true);
});

gulp.task('buildProjectPages', function buildHTML() {
  var pages = ['dom', 'kuchnia-1', 'kuchnia-2', 'kuchnia-3', 'kuchnia-4', 'krzeslo'],
    src = 'src/projects/',
    dest = '/projects/';
  
  handleInjection(pages, src, dest, false);
});

function handleInjection(pages, src, dest, includeHead) {
  return pages.forEach(function(page) {
    gulp.src(`${src}${page}.html`)
      .pipe(gulpif(includeHead, 
        inject(gulp.src(['src/templates/head.html']), {
            starttag: '<!-- inject:head:{{ext}} -->',
            transform: function (filePath, file) { 
              return file.contents.toString('utf8')
            }
        }))
      )
      .pipe(inject(gulp.src(['src/templates/nav.html']), {
        starttag: '<!-- inject:nav:{{ext}} -->',
        transform: function (filePath, file) { 
          return file.contents.toString('utf8')
        }
      }))
      .pipe(inject(gulp.src(['src/templates/footer.html']), {
        starttag: '<!-- inject:footer:{{ext}} -->',
        transform: function (filePath, file) { 
          return file.contents.toString('utf8')
        }
      }))
    .pipe(rename({dirname: `${dest}${page}`, basename: 'index', extname: '.html' }))
    .pipe(gulp.dest('.'));
  });
}

gulp.task('minify:css', function () {
  return gulp.src('src/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('static/'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('static/'))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.html', ['buildMainPages', 'buildProjectPages']);
  gulp.watch('src/**/*.scss', ['minify:css']);
});

gulp.task('default', ['buildMainPages', 'buildProjectPages', 'minify:css']);
