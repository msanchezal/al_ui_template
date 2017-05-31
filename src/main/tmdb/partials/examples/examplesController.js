/**
 * EaxmpleController provides some examples about basic directives
 *
 * @module tmdb.partials.home.EaxmpleController
 *
 * @requires angular
 * @requires config
 * @requires TMDBAPIService
 *
 * @author msanchez <msanchez@alertlogic.com>
 *
 * @returns instance of the EaxmpleController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, config, TMDBAPIService ) {
        "use strict";

        var ExamplesController = function($scope, TMDBAPIService ) {

            $scope.view   = {
                movies: [],
                showText: true,
                sort: true,
                dato: {}
            };

            var api = TMDBAPIService.Discover();
            api.discover.movies().then(function ( response ) {
                $scope.view.movies = response.data.results;
            });

            //functions
            $scope.hide = function(){
                $scope.view.showText = !$scope.view.showText;
            };

            $scope.sort = function(){
                $scope.view.sort = !$scope.view.sort;
            };
        };

        ExamplesController.$inject = [ '$scope', 'TMDBAPIService' ];

        return ExamplesController;
    }
);