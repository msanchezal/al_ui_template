/**
* the controller needs to be loaded explicitly with requireJS as the normal application only registers the
* controllers inside the route definitions, which are not evaluated during testing, so they are not known to angularJS
*/
define([ 'angular',
         'config/config',
         'tmdb/partials/movieDetail/MovieDetailController' ], 
    function( angular, config, MovieDetailController ) {
        "use strict";
        describe("the moviedetailcontroller", function () {
            var moviedetailcontroller, scope, mockService, timeout;

            beforeEach(function () {
                /**
                * Load the required modules
                */
                module("config");
                module("ngRoute");

                /**
                * Injection
                */
                inject(["$rootScope", "$controller", "$timeout",
                    function ($rootScope, $controller, $timeout) {
                    //instantiate the controller with a newly created scope
                    scope       = $rootScope.$new();
                    timeout     = $timeout;
                    mockService = {
                        Movie: function () {
                            return {
                                movie: {
                                    movie: function () {
                                        return {
                                            then: function () {
                                                return {};
                                            }
                                        };
                                    }
                                }
                            };
                        }
                    };
                    moviedetailcontroller = $controller(MovieDetailController,
                                                    {
                                                        $scope: scope,
                                                        $timeout: timeout,
                                                        TMDBAPIService: mockService
                                                    }
                                     );
                }]);
            });

            /*
            * Test default initialization variables
            */
            describe("when the controller is created", function() {
                it("should have matching defaults", function () {
                    expect(scope.view.details).toEqual({});
                    expect(scope.view.loading).toBe(false);
                });
            });

            /*
            * Test base functionality
            */
            describe("when the controller is created and the movieId is changed", function() {
                it("should have matching defaults", function () {
                    spyOn( moviedetailcontroller.internal ,'loadMovieData');

                    scope.movieId = 1;
                    scope.$apply();

                    expect( moviedetailcontroller.internal.loadMovieData ).toHaveBeenCalled();
                });

                it("should change the load variable when timeout is not executed yet", function () {
                    scope.movieId = 1;
                    scope.view.loading = false;
                    scope.$apply();

                    expect( scope.view.loading ).toBe(true);
                });

                it("should change the load variable when timeout is executed", function () {
                    scope.movieId = 1;
                    scope.view.loading = false;
                    scope.$apply();
                    timeout.flush(5000);

                    expect( scope.view.loading ).toBe(false);
                });

            });
        });
    }
);