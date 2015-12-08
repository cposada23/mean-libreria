(function(){
    angular.module('LibreriaApp')
    .controller('InsertarController', ['$scope', '$state', '$http', function($scope, $state, $http){
        $scope.insertado = false;
        $scope.createBook = function () {
            //console.log($scope.nuevoLibro);
            $http.post('https://mean-libreria-cposada23.c9users.io/api/book/add', $scope.nuevoLibro).success(function(response) {
                console.log("insertado correctamente");
                $scope.nuevoLibro={};
                $scope.insertado=true;
            }).error(function(error) {
                console.error("Fallo" + error);
            });
        };
       
        
    }]);
}());