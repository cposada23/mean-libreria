(function(){
    angular.module('LibreriaApp')
    .controller('navController', ['$scope', '$state', '$http', function($scope, $state, $http){
        this.tab = 1;
    
        this.setTab = function(newValue){
          this.tab = newValue;
          console.log(newValue);
        };
    
    
        this.isSet = function(tabName){
          return this.tab === tabName;
        };
  }]);
}());
