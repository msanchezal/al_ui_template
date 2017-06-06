/**
 * Provides a score element
 *
 * @module tmdb.directives.score
 *
 * @requires angular
 * @requires ScoreController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} ScoreController - An instance of ScoreController
 *
 * @author Maryit Sanchez <msanchez@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2017
 *
 */
define( [ 'angular',
          'tmdb/partials/score/ScoreController' ], 
    function( angular, ScoreController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: ScoreController,
                templateUrl: '/tmdb/partials/score/score.html',
                restrict: 'E',
                scope: {
                    val: '=', //? is to specify that the value is optional
                    prefix: '@', //string
                    action: '&' //function
                }/*,
                link: function(scope, elem, attrs) {

                    //this is to manipulate the dom
                    elem.bind('click', function() {
                        elem.css('background-color', 'red');
                        scope.$apply(function() {
                          scope.color = "red";
                        });
                    });

                    elem.bind('mouseover', function() {
                        elem.css('cursor', 'pointer');
                    });
                }*/
            };
        };
    }
);