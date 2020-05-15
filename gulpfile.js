let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let babel = require("gulp-babel");
let imgmin = require("gulp-imagemin");
let uglify = require("gulp-uglify");
let cssmin = require("gulp-clean-css");
let concat = require("gulp-uglify");
let connect = require("gulp-connect");
let sass = require("gulp-sass");


// 复制
// gulp.task("copyall", async() => {
//     gulp.src("./src/**/*")
//         .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\XIAOMI"));

// })

// 监听
gulp.task("default", async() => {
    // gulp.watch("./src/*.html", async() => {
    //         gulp.src("./src/*.html")
    //             .pipe(htmlmin({
    //                 collapseWhitespace: true,
    //             }))
    //             .pipe(gulp.dest("./dist"));
    //     })
    gulp.watch("./src/*.html", async() => {
        gulp.src("./src/*.html")
            .pipe(htmlmin({
                collapseWhitespace: true,
            }))
            .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\XIAOMI"));
    })
    gulp.watch("./src/js/*.js", async() => {
        gulp.src("./src/js/*.js")
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\XIAOMI\\js"));
    })

    gulp.watch("./src/PHP/**/*", async() => {
        gulp.src("./src/PHP/**/*")
            .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\XIAOMI\\PHP"));
    })
    gulp.watch("./src/img/**/*", async() => {
        gulp.src("./src/img/**/*")
            .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\XIAOMI\\img"));
    });


    // sass编译
    gulp.watch("./src/scss/*.scss", async() => {
        gulp.src("./src/scss/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\XIAOMI\\css"));
    })

})


// gulp.task("default", async() => {
//     gulp.src("./src/js/*.js")
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest("d:\\phpstudy_pro\\WWW\\XIAOMI\\js"))
// })
// gulp.task("watchall", async() => {
//     gulp.watch("./src/**/*", async() => {
//         gulp.src("./src/**/*")

//         .pipe(gulp.dest("./dist"));
//     })


// })




// gulp.task("connect", function() {
//     connect.server({
//         root: "./dist",
//         livereload: true
//     })
// })