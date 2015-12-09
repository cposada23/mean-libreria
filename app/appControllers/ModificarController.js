(function(){
    angular.module('LibreriaApp')
    .controller('ModificarController', ['$scope', '$state', '$http', function($scope, $state, $http){
        $scope.libro = localStorage.getItem('LibroAModificar');
        
    }]);
}());