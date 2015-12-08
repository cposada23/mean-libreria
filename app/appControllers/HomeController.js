(function(){
    var app = angular.module('LibreriaApp');
    
    app.controller('HomeController', ['$scope', '$state', '$http', function($scope, $state, $http){
        $scope.books =[];
        $scope.findall = function () {
            $http.get('https://mean-libreria-cposada23.c9users.io/api/book/findall').success(function (response) {
                console.log("Libros buscados correctamente");
                console.log("reposnse" + response[0].name);
                $scope.books = response;
                localStorage.setItem('Libros',JSON.stringify(response));
                
                console.log("localStorage"+ localStorage);
                console.log("Books " + $scope.books);
            }).error(function (err) {
                console.log(err);
            });
             
        };
        
        $scope.nuevoLibro={
            name:"inserto",
            year:"345",
            language:"denuevo",
            author:"y"
        };
        
        $scope.borrar= function (book) {
            console.log("libro a borrar antes : "+book );
            var indice = $scope.books.indexOf(book);
            $scope.id = book._id;
            console.log("id a borrar " + $scope.id);
            $scope.libro = {
                name:book.name,
                year:book.year,
                language:book.language,
                author:book.author
            }
            console.log("libro a borrar scope"+ $scope.libro.name);
            $http.post('https://mean-libreria-cposada23.c9users.io/api/book/del', $scope.libro).success(function(response) {
                console.log("Borrado correctamente");
            }).error(function(error) {
                console.error("Fallo" + error);
            });
            
            $scope.books.splice(indice,1);
        };
    
        
    }]);
}());