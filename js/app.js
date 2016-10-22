var app = angular.module('skeleton', ['ngRoute']);
app.conf=function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/formtemplate', {
            controller: 'FormTemplateController',
            templateUrl: 'views/formtemplate.html'
        })
        .when('/agendatemplate', {
            controller: 'AgendaTemplateController',
            templateUrl: 'views/agendatemplate.html'
        })
        .when('credits', {
            templateUrl: 'views/credits.html'
        })
        .otherWise({
            redirectTo: '/'
        });
}
app.config(app.config);