define( [ 'angular',
          'config/config'],
    function( angular, config ) {
        "use strict";

        var ScoreController = function( $scope, $rootScope ) {

            $scope.view = {
                color: 'gray'
            };

            var internal = {
                assignColor: function( val ) {
                    console.log(val);
                    if( val >= 7 ){
                        $scope.view.color = 'green';
                    }
                    if( val <= 6 ){
                        $scope.view.color = 'red';
                    }
                }
            };

            $scope.click = function() {
                //$scope.$emit('score-clicked', $scope.view.color );
                $rootScope.$broadcast('score-clicked', $scope.view.color);
            };

            $scope.$on('movie-tile-click', function(event, msg){
                $scope.view.color = 'yellow';
                console.log(event);
                console.log(msg);
            });

            internal.assignColor($scope.val);
        };

        ScoreController.$inject = [ '$scope', '$rootScope' ];

        return ScoreController;
    }
);