import gulp from "gulp";
import imageMin from "gulp-imagemin";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";

const tran_sass = gulpSass(nodeSass);

gulp.task("image", function () {
  return new Promise(function (resolve) {
    gulp
      .src("src/image/*")
      .pipe(imageMin())
      .pipe(gulp.dest("build/image"))
      .on("end", function () {
        resolve();
      });
  });
});

gulp.task("scss", function () {
  return new Promise(function (resolve) {
    gulp
      .src("./src/scss/*")
      .pipe(tran_sass().on("error", tran_sass.logError))
      .pipe(gulp.dest("build/css"))
      .on("end", function () {
        resolve();
      });
  });
});
