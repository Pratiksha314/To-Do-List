var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/allItems', {
            templateUrl: 'app/Views/getItems.html',
            controller: "getController"
        })
    
        // .when('/deleteItem',{
        //     templateUrl: 'app/Views/getItems.html',
        //     controller: "deleteController"
        // })
});

