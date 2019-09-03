const app = angular.module('appTareas', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider) {

		$routeProvider
			.when("/", {
				templateUrl: "app/vistas/login.html",
				//controller: "app/controladores/loginCtrl"
			}).when("/tarea", {
				templateUrl: "app/vistas/tarea.html",
				//controller: "app/controladores/usuarioCtrl"
			}).when("/usuario", {
				templateUrl: "app/vistas/usuario.html",
				//controller: "app/controladores/usuarioCtrl"
			}).when("/chat", {
				templateUrl: "app/vistas/chat.html",
				controller: "chat",
			}).otherwise({
	            redirectTo: "/"
	        });
	}]);