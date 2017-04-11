var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var gulpMocha = require('gulp-mocha'),
    evn = require('gulp-env'),
    supertest = require('supertest');


gulp.task("default",function(){
    nodemon({
        script:"app.js",
        ext:"js",
        env:{
            PORT:8000
        },
        ignore:["./node_modules/**"]
    }).on("restart",function(){
        console.log("Restarting");
    });
});

gulp.task('test',function(){
    evn({vars:{ENV:'Test'}});
    gulp.src('tests/*.js',{read:false})
        .pipe(gulpMocha({reporter:'nyan'}))
})