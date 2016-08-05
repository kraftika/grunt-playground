'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		tags: {
		    build: {
		        options: {
			        scriptTemplate: '<script src="{{ path }}"></script>',
		            openTag: '<!-- start template tags -->',
		            closeTag: '<!-- end template tags -->'
		        },
		        src: [
		            'app/**/*.js'
		        ],
		        dest: 'index.html'
		    }
		}
	});

	grunt.loadNpmTasks('grunt-script-link-tags');
	grunt.registerTask('build', ['tags:build']);
};



