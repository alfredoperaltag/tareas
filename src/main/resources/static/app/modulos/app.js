const app = angular.module('appTareas', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider) {

		$routeProvider
			.when("/", {
				templateUrl: "app/vistas/tarea.html",
				//controller: "app/controladores/tareasCtrl"
			}).when("/usuario", {
				templateUrl: "app/vistas/usuario.html",
				//controller: "app/controladores/usuarioCtrl"
			})
	}]);
