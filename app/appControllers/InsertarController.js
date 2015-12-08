(function(){
    angular.module('LibreriaApp')
    .controller('InsertarController', ['$scope', '$state', '$http', function($scope, $state, $http){
        $scope.createBook = function () {
            //console.log($scope.nuevoLibro);
            $http.post('api/book/add', $scope.nuevoLibro).success(function(response) {
                console.log("insertado correctamente");
                $scope.nuevoLibro={};
            }).error(function(error) {
                console.error("Fallo" + error);
            })
        };
       
        
    }]);
}());