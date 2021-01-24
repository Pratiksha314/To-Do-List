var myApp = angular.module("myApp");

myApp.controller("getController", function ($scope, $http, $route) {
    $http.get('/getItem').then(function (response) {
        $scope.items = response.data;
    }, function (error) {
        console.log(error);
    }
    );

    $scope.deleteItem = function (_id) {
        $http.delete('/deleteItem/' + _id).then(function () {
            $route.reload();
        }, function (error) {
            console.log(error);
        }
        );
    }
    $scope.editItem = function (_id) {
        $http.get('/getItemById/' + _id).then(function (response) {
            $scope.itemName = response.data["itemName"]
            $scope._id = response.data["_id"]
        }, function (error) {
            console.log(error);
        });
    }
    $scope.doneEdit = function ($event, _id, nameOfItem) {

        $scope.itemName = nameOfItem;
        console.log(nameOfItem);
        $event.preventDefault();

        $http.patch('/updateItem/' + _id, { 'itemName': $scope.itemName }).then(function () {
            $route.reload();
        }, function (error) {
            console.log(error);
        });
    }
});