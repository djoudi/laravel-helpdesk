module.exports = function(grunt) {

    // Configuração das tarefas
    grunt.initConfig({

        // Tarefa de minificação de Javascript
        uglify: {
            options: {
                mangle: false	// não muda o nome de funções e variáveis
            },

            dist: {
                files: {
                    'public/assets/js/main.js' : [ 'app/assets/js/*.js' ]
                }
            }
        }, // uglify

        // Tarefa de pré-processamento de CSS
        less: {
            dist: {
                options: {
                    compress: false // minifica o resultado
                },

                files: {
                    'public/assets/css/main.css': ['app/assets/css/*.less']
                }
            }
        }, // less

        // Tarefa para monitorar as alterações de arquivos
        watch: {
            js: {
                files: ['app/assets/js/*.*'],
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: ['app/assets/css/*.*'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        } // watch
    });

    // Carrega plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Registro das tarefas
    grunt.registerTask('default', ['watch']);
}