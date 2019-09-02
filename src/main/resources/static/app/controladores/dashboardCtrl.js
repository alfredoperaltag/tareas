const dashboard = angular.module('DashboardApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider) {

		$routeProvider
			.when("/dashboard/tarea", {
				templateUrl: "app/vistas/tarea.html",
				//controller: "app/controladores/usuarioCtrl"
			}).when("/dashboard/usuario", {
				templateUrl: "app/vistas/usuario.html",
				//controller: "app/controladores/usuarioCtrl"
			})
	}]);