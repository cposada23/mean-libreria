(function(){
    var app = angular.module('LibreriaApp', ['ui.router']);
    //configuracion de la app
    app.config(function($stateProvider, $urlRouterProvider){
        //default
        
        $urlRouterProvider.otherwise('Home');
        
        $stateProvider
        .state('Home', {
            url: "/home",
            templateUrl: "app/templates/home.html",
            controller: "HomeController"
        })
        
        .state('Buscar', {
            url: "/buscar",
            templateUrl: "app/templates/buscar.html",
            controller: "InsertarController"
        })
        
        .state('Insertar', {
            url: "/insertar",
            templateUrl: "app/templates/insertar.html",
            controller: "BuscarController"
        }).
        state('Modificar', {
            url:"/modificar",
            templateUrl:"app/templates/modificar.html",
            controller:"ModificarController"
        });
     
        
        
    });
}());