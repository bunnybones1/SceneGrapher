module.exports = function(grunt) {
	grunt.initConfig({
	    shell: {
	        multiple: {
	            command: [
	                'mkdir database/db',
	                'cd database/db',
	                '"c:\\Program Files\\mongodb\\bin\\mongod.exe" --dbpath "c:\\Tomasz\\repos\\ToyotaBeTheHero\\sceneGrapher\\database"'
	            ].join('&&'),
		        options: {
		            async: true
		        }
	        }
	    }
	});
	grunt.loadNpmTasks('grunt-shell-spawn');
	grunt.registerTask('default', ['shell']);
};