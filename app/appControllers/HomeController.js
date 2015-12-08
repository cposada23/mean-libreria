(function(){
    angular.module('LibreriaApp')
    .controller('HomeController', ['$scope', '$state', '$http', function($scope, $state, $http){
        $scope.books =[];
        $scope.findall = function () {
            $http.get('https://mean-libreria-cposada23.c9users.io/api/book/findall').success(function (response) {
                console.log("Libros buscados correctamente");
                console.log("reposnse" + response[0].name);
                $scope.books = response;
                console.log("Books " + $scope.books);
            }).error(function (err) {
                console.log(err);
            });
             
        };
    
        
    }]);
}());