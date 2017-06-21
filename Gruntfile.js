var mozjpeg = require('imagemin-mozjpeg');

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'src/**/**/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					console: true,
					module: true,
					document: true
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand: true,
					cwd: 'src/',
					src: '**/**/*.html',
					dest: 'dist/'
				}]
			}
		},
		cssmin: {
			dist: {
				options: {
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: [{
					expand: true,
					cwd: 'src/',
					src: '**/**/*.css',
					dest: 'dist/'
				}]
			}
		},
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 5,
					use: [mozjpeg({ quality: 25 })]
				},
				files: [{
					expand: true,                  // Enable dynamic expansion
					cwd: 'src/',                   // Src matches are relative to this path
					src: ['**/**/*.{png,jpg,gif}'],   // Actual patterns to match
					dest: 'dist/'                  // Destination path prefix
				}]
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: '**/**/*.js',
					dest: 'dist/'
				}]
			}
		},
		pagespeed: {
			options: {
				nokey: true,
				url: "http://2bc2c122.ngrok.io"
			},
			desktop: {
				options: {
					url: "http://2bc2c122.ngrok.io",
					locale: "en_GB",
					strategy: "desktop",
					threshold: 90
				}
			},
			mobile: {
				options: {
					url: "http://2bc2c122.ngrok.io",
					locale: "en_GB",
					strategy: "mobile",
					threshold: 90
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-pagespeed');

	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('speed', ['pagespeed']);
	grunt.registerTask('default', ['jshint', 'imagemin', 'cssmin', 'htmlmin', 'uglify']);

};