define( [ 'angular',
          'config/config'],
    function( angular, config ) {
        "use strict";

        var MovieTileController = function($scope ) {

            $scope.view = {
                images: config.apiImg
            };

            $scope.clickOne = function(){
                console.log("en el click one");
            };

            $scope.clickTwo = function(){
                console.log("en el click two");
            };
        };

        MovieTileController.$inject = [ '$scope' ];

        return MovieTileController;
    }
);