module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
          watch: {
            concat: {
                files: 'resources/css/*.css',
                tasks: ['concat:styles']
            }
        },
        concat: {
            options: {
                separator: '\n \n ',
             },
            dist: {
                src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'resources/js/main.js'],
                dest: 'resources/js/dist/main.joined.js',
            },
            styles: {
                src: ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'bower_components/components-font-awesome/css/font-awesome.css', 'resources/css/style.css'],
                dest: 'resources/css/dist/style.min.css'
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                    flatten: true,
                    src: 'bower_components/components-font-awesome/fonts/*',
                    dest: 'resources/css/fonts' 

                    }
                    
                ]
            }
        },
        uglify: {
            options: {
            mangle:false
            },
            my_target: {
            files: {
                'resources/js/dist/main.min.js': ['resources/js/dist/main.joined.js']
            }
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Tasks
    grunt.registerTask('all', ['concat','uglify','copy']);
    grunt.registerTask('default', ['concat', 'uglify']);

}