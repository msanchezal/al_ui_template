/**
 * MovieDetail provides support for getting a remote image URL base path to the directives
 *
 * @module tmdb.partials.movieDetail.MovieDetail
 *
 * @requires angular
 * @requires config
 *
 * @author maryit sanchez <msanchez@alertlogic.com>
 *
 * @returns instance of the MovieDetail
 *
 * @copyright Alert Logic, Inc 2017
 *
 */

define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService' ],
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var MovieDetail = function( $scope, $timeout, TMDBAPIService ) {

            var config  = angular.module("config");
            $scope.view = {
                images : config.apiImg,
                details : {},
                loading: false
            };

            var loadMovieData = function( id ){
                $scope.view.loading = true;
                var api = TMDBAPIService.Movie();
                api.movie.movie(id).then( function ( response ) {
                    $scope.view.details = response.data;
                });

                $timeout(function(){
                    $scope.view.loading = false;
                    console.log("after some seconds");
                }, 5000);
            };

            $scope.$watch('movieId',function( newValue, oldValue){
                console.log("en el watch : ", newValue, oldValue);
                if(newValue){
                    loadMovieData(newValue);
                }
            });

        };

        MovieDetail.$inject = [ '$scope', '$timeout', 'TMDBAPIService' ];

        return MovieDetail;
    }
);