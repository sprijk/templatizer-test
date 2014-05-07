clean       = require 'gulp-clean'
coffee      = require 'gulp-coffee'
gulp        = require 'gulp'
ignore      = require 'gulp-ignore'
jade        = require 'gulp-jade'
less        = require 'gulp-less'
nodemon     = require 'gulp-nodemon'
templatizer = require 'templatizer'
watch       = require 'gulp-watch'
path        = require 'path'

compileCoffee = (source, destination) ->
	coffeeCompiler = coffee bare: true

	coffeeCompiler.on 'error', (error) ->
		console.error error.message

	source
		.pipe coffeeCompiler
		.pipe destination

compileTemplates = (source, destination) ->
	try
		templatizer source, destination
	catch error
		console.error error.message

gulp.task 'clean', ->
	gulp.src "build/*", read: false
		.pipe clean force: true

gulp.task 'copy', ['clean'], ->
	gulp.src [ "src/**/*", "!**/*.coffee", "!**/*.less", "!src/client/**/*.jade" ]
		.pipe gulp.dest "build"

gulp.task 'compile:coffee', ['clean'], ->
	source = gulp.src [ "src/**/*.coffee" ]

	source
		.pipe coffee bare: true
		.pipe gulp.dest "build"

gulp.task 'compile:less', ['clean'], ->
	gulp.src "src/client/less/app.less"
		.pipe less()
		.pipe gulp.dest "build/client/css"

gulp.task 'compile:templates', ['clean'], ->
	source      = path.resolve __dirname, "src/client/templates"
	destination = path.resolve __dirname, "build/client/js/app/templates.js"

	compileTemplates source, destination

gulp.task 'compile', [
	'compile:coffee'
	'compile:less'
	'compile:templates'
]

gulp.task 'watch', ['copy', 'compile'], ->
	watch {
		name: 'watch.coffee'
		glob: "src/**/*.coffee"
	}, (source) ->
		compileCoffee source, gulp.dest "build"

	watch {
		name: 'watch.less'
		glob: "src/**/*.less"
	}, (files) ->
		gulp.src "src/client/less/app.less"
			.pipe less()
			.pipe gulp.dest "build/client/css"

	watch {
		name: 'watch.jade'
		glob: "src/**/*.jade"
	}, (files) ->
		source      = path.resolve __dirname, "src/client/templates"
		destination = path.resolve __dirname, "build/client/js/app/templates.js"

		compileTemplates source, destination

	watch {
		name: 'watch.copy'
		glob: "src/**/*"
	}, (files) ->
		files
			.pipe ignore.exclude '**/*.less'
			.pipe ignore.exclude '**/*.coffee'
			.pipe ignore.exclude '**/*.jade'
			.pipe gulp.dest "build"

	setTimeout (->
		monitor = nodemon
			script: 'app.js'
			watch:  [ "build" ]
			ext:    'js css html'
	), 10

gulp.task 'default', [
	'compile'
	'test'
]
