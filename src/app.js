(function() {
    var app = angular.module('app', ['ngRoute']);

    app.config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/', {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: './templates/home.html'
            });
        }
    ]);
}());
