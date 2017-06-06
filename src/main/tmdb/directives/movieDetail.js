define( [ 'angular',
          'tmdb/partials/movieDetail/MovieDetailController' ], 
    function( angular, MovieDetailController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: MovieDetailController,
                templateUrl: '/tmdb/partials/movieDetail/movieDetail.html',
                restrict: 'E',
                scope: {
                    movieId: '=',
                }
            };
        };
    }
);