gloriaFoodApp.controller('foodMenuController',['$scope', '$http', 'foodDataService', function($scope, $http, foodDataService){
   var url =  "http://localhost:8000/app/foodmenu/data.json";
    $scope.menuData = foodDataService.food;
    $http.get(url)
        .success(function(response){
            $scope.menuData = response.foodCategories;
            console.log($scope.menuData);
        })
        .error(function(error){
            console.error("faild to get menu data");
        })
}]);