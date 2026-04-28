angular.module("app").controller("index", index);
index.$inject = ["$scope"];
function index($scope, $log)
{
    console.log("Controlador")
    $scope.mensaje1 = "hola soy una variable controlador";

    $scope.funcion=() =>
    {
        alert($scope.mensaje1);
    }
    
}