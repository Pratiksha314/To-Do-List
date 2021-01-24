var myApp = angular.module("myApp");

myApp.controller("mainController", function ($scope, $http, $location, $route) {

    $scope.submit = function ($event) {
        $event.preventDefault();

        $http.post('/addItem', { 'itemName': $scope.itemName }).then(
            function (res) {
                console.log("successfully added: " + $scope.itemName);
                $location.path('/allItems');
                $route.reload();
                $scope.itemName = '';
            }, function (error) {
                console.log("error !!..not added");
            }
        );
    }
});