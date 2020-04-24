/*global module, require */
(function () {

    'use strict';

    module.exports = function (grunt) {
        require("load-grunt-config")(grunt);

        grunt.loadNpmTasks("grunt-prettier");
        grunt.initConfig({
            prettier: {
                gruntfile: {
                    src: ["MMM-*/*.js"]
                }
            }
        });
        grunt.registerTask("default", ["prettier"]);
    };
}());
