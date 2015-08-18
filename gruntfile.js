
//get the grunt methods going
module.exports = function(grunt) {
	//1. load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	//2. start working with grunt
	grunt.initConfig({
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //end options
			} //end dev
		}, //end compass
		//create a task
		uglify: {
			//setup the objects
			my_target: {
				files: {
					//destination and location of files to process
					//take components js script and compress it and save it to js script js
					'_/js/script.js' : ['_/components/js/*.js']
				} //files
			}//target
		}, //uglify
		//second task creation
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			},//end scripts
			sass: {
			//checks for updates in any .scss file
				files: ['_/components/sass/*.scss'],
			//runs compass->dev method if anything is updated
				tasks: ['compass:dev']
			}, //end sass
			html: {
				files: ['*.html']
			} //end html
		} //end watch
	}) //init configu
	grunt.registerTask('default', 'watch');//in the terminal now if yoou just write grunt it'll automatically call the grunt watch
} //end exports
