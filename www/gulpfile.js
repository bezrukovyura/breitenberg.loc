let debug = true;

let gulp = require('gulp');

let sourcemaps = require('gulp-sourcemaps');
let less = require('gulp-less');
const changed = require('gulp-changed');
let tsc = require('gulp-typescript');

if (!debug) {
    let concat = require('gulp-concat');
    let uglify = require('gulp-uglify');
    let cleanCSS = require('gulp-clean-css');
    let LessAutoprefix = require('less-plugin-autoprefix');
    let autoprefix = new LessAutoprefix({ browsers: ['last 5 versions'] });



    var paths = {
        scripts: [
            'js/jquery-3.3.1.min.js',
            'js/App.js',
            'js/slick.min.js',
            'js/jquery.waypoints.min.js',
            'js/jquery.mCustomScrollbar.concat.min.js',
            'js/css3-animate-it.js'
        ],
        styles: [
            'css/fonts.css',
            'css/slick.css',
            'css/slick-theme.css',
            'css/jquery.mCustomScrollbar.css',
            'css/animations.css',
            'css/animations-ie-fix.css',
            'css/style.css'
        ],
        less: ['css/*.less'],
        typescript: ['ts/*.ts'],
    };

    gulp.task('Less', function () {
        return gulp.src(paths.less)
            .pipe(changed('css'))
            .pipe(less({
                plugins: [autoprefix]
            }))
            .pipe(gulp.dest('css'));
    });

    gulp.task('typescript', function () {
        return gulp.src(paths.typescript)
            //.pipe(sourcemaps.init())
            .pipe(tsc({
                noImplicitAny: true,
                removeComments: true,
                preserveConstEnums: true,
                //    sourceMap: true
            }))
            //.pipe(sourcemaps.write())
            .pipe(gulp.dest('js'));
    });

    gulp.task('scripts', ['typescript'], function () {
        return gulp.src(paths.scripts)
            //.pipe(changed('build'))
            //.pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concat('script.js'))
            //.pipe(sourcemaps.write())
            .pipe(gulp.dest('build'));
    });

    gulp.task('styles', ['Less'], () => {
        return gulp.src(paths.styles)
            //.pipe(changed('build'))
            //.pipe(sourcemaps.init())
            .pipe(cleanCSS())
            //.pipe(sourcemaps.write())
            .pipe(concat('style.css'))
            .pipe(gulp.dest('build'));
    });
}

gulp.task('typescript', function () {
    return gulp.src('./Scripts/*.ts')
        .pipe(tsc({
            noImplicitAny: true,
            removeComments: true,
            preserveConstEnums: true,
            sourceMap: true,
            target: "ES6"
        }))
        .pipe(gulp.dest('./Scripts'));
});

gulp.task('less', function () {
    return gulp.src("./Styles/*.less")
        //.pipe(changed('./Styles'))
        .pipe(less({}))
        .pipe(gulp.dest('./Styles'));
});

gulp.task('watch', function () {
        gulp.watch('./Scripts', debug ? ['typescript'] : ['scripts']);
        gulp.watch('./Styles', debug ? ['less']: ['styles']);
});


gulp.task('default', debug ? ['watch', 'typescript', 'less']:  ['watch', 'scripts', 'styles']);

gulp.task('copy', function () {
    gulp.src('build/*.*').pipe(gulp.dest('_production/build'));
    gulp.src('fonts/**/*.*').pipe(gulp.dest('_production/fonts'));
    gulp.src('img/**/*.*').pipe(gulp.dest('_production/img'));
    gulp.src('php/**/*.*').pipe(gulp.dest('_production/php'));
    gulp.src(['*.php', '*.png', '*.txt', '*.xml']).pipe(gulp.dest('_production'));
});