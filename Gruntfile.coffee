module.exports = (grunt) ->
	grunt.initConfig(
		coffee:
			build:
				src: ['src/transitionutil.coffee']
				dest: 'lib/transitionutil.js'

		uglify:
			build:
				src: ['lib/transitionutil.js']
				dest: 'lib/transitionutil.min.js'

		watch:
			files: ['src/**/*.coffee']
			tasks: ['coffee']
	)

	grunt.loadNpmTasks('grunt-contrib-coffee')
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-watch')

	grunt.registerTask('default', [
		'coffee',
		'uglify',
	])
