/**
 * Provides a movie-tile element
 *
 * @module tmdb.directives.movieTile
 *
 * @requires angular
 * @requires MovieTileController
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} MovieTileController - An instance of MovieTileController
 *
 * @author Maryit Sanchez <msanchez@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2017
 *
 */

define( [ 'angular',
          'tmdb/partials/movieTile/MovieTileController' ],
    function( angular, MovieTileController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: MovieTileController,
                templateUrl: '/tmdb/partials/movieTile/movieTile.html',
                restrict: 'E',
                scope: {
                    movie: '=ngModel',
                    even: '='
                }
            };
        };
    }
);