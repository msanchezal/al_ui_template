define( [ 'angular',
          'config/config'],
    function( angular, config ) {
        "use strict";

        var MovieTileController = function($scope ) {

            $scope.view = {
                images: config.apiImg,
                msg:''
            };

            $scope.clickOne = function(){
                console.log("en el click one");
            };

            $scope.clickTwo = function(){
                console.log("en el click two");
            };

            $scope.sendMsg = function(){
                $scope.$broadcast('movie-tile-click',$scope.movie);
            };

            $scope.movieSelected = function(){
                $scope.$emit('movie-selected', $scope.movie);
            };

            $scope.$on('score-clicked', function(event, msg){
                $scope.view.msg=msg;
                console.log("en el tile: "+msg);
            });
        };

        MovieTileController.$inject = [ '$scope' ];

        return MovieTileController;
    }
);