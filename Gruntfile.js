/* global module */

module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: grunt.file.readJSON(".jshintrc"),
            files: [
				"Gruntfile.js",
				"ObjectCreation/*.js"
			]
        },
        jasmine: {
            all_targets: {
                src: [
                    "Underscore/underscore.js",
                    "ObjectCreation/ObjectCreation.js"
                ],
                options: {
                    specs: "ObjectCreation/*Spec.js"
                }
            }
        },
        watch: {
            files: ["<%= jshint.files %>"],
            tasks: ["jshint", "jasmine"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jasmine");

    grunt.registerTask("default", ["jshint", "jasmine"]);
};
