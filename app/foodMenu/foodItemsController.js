gloriaFoodApp.controller('foodMenuController',['$scope', '$http', 'foodDataService', function($scope, $http, foodDataService){
   var url =  "http://localhost:8000/app/foodmenu/data.json";
    // $scope.itemsData = foodDataService.food;
    angular.copy(foodDataService.food,scope.itemsData);
    $scope.selectedOrder = '';
}]);