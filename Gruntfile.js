module.exports = function(grunt) {
	function log(err, stdout, stderr, cb) {
	    console.log(stdout);
	    cb();
	}
	grunt.initConfig({
	    shell: {
	        mongo: {
	            command: [
	                'ls',
	                '"c:\\Program Files\\mongodb\\bin\\mongod.exe" --dbpath "c:\\Tomasz\\repos\\ToyotaBeTheHero\\sceneGrapher\\database"'
	            ].join('&&'),
		        options: {
		            //async: true,
		            stdout: true,
		            stderr: true,
		            callback: log
		        }
	        },
		    beefy: {
		      command: 'beefy scripts/frontEnd.js --live --cwd client'
		    }
	    },
		concurrent: {
			dev: {
				tasks: ['shell:mongo','shell:beefy'],
				options: { logConcurrentOutput: true }
			}
		}
	});
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-shell-spawn');
	grunt.registerTask('default', ['concurrent']);
};