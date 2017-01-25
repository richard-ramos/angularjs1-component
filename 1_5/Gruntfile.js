// Generated on 2014-02-03 using generator-webapp 0.4.7
'use strict';

var browserSync = require("browser-sync");
var modRewrite  = require('connect-modrewrite');



module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.initConfig({
        paths: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', '<%= paths.dist %>/*', '!<%= paths.dist %>/.git*']
                }]
            },
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: false,
                    cwd: '<%= paths.app %>',
                    dest: '<%= paths.dist %>',
                    src: ['*.{ico,png,txt}', '.htaccess', 'images/{,*/}*.webp', '{,*/}*.html', 'styles/fonts/{,*/}*.*']
                }]
            },
            styles: {
                expand: true,
                dot: false,
                cwd: '<%= paths.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        bower: {
            install: {
                options: {
                    install: true,
                    verbose: true,
                }
            }
        },
        wiredep: {
            task: {
                src: [
                    'index.html'
                ]
            }
        },
		
		watch: {
            options: {
                cwd: '/',
                spawn: false    // This is very important
            },
            files: ['bower_components/**/*.html', 'bower_components/**/*.css','bower_components/**/*.js'],
            tasks: ['build']
        },
		
		 injector: {
    options: {},
    local_dependencies: {
      files: {
        'index.html': [
						'{app,components}/**/*.js',
						'app/app.js'
					]
      }
    }
  }
		
    });
	
	
   // Init BrowserSync manually
    grunt.registerTask("bs-init", function () {
        var done = this.async();
        browserSync({
            open: "local",
            logLevel:'debug',
            timestamps: false,
            server: {
                baseDir: ".",
				middleware: [
					modRewrite([
						'!\\.\\w+$ /index.html [L]'
					])

				]
            }
        }, function (err, bs) {
            done();
        });
    });
	

	grunt.loadNpmTasks('grunt-injector');
	grunt.loadNpmTasks('grunt-browser-sync');
	
    grunt.registerTask('build', [
        'clean:dist',
        // 'concat',
        // 'uglify',	
        'bower:install',
        'wiredep:task',
		'injector',
        'copy:dist'
    ]);
	
	
    grunt.registerTask('default', ['bs-init', 'watch']);
};