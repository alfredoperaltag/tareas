const app = angular.module('appTareas', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function ($routeProvider) {

		$routeProvider
			.when("/", {
				templateUrl: "app/vistas/login.html",
				controller: "loginCtrl"
			}).when("/tarea", {
				templateUrl: "app/vistas/tarea.html",
				controller: "usuarioCtrl"
			}).when("/usuario", {
				templateUrl: "app/vistas/usuario.html",
				controller: "usuarioCtrl"
			}).when("/chat", {
				templateUrl: "app/vistas/chat.html",
				controller: "chatCtrl",
			}).otherwise({
	            redirectTo: "/"
	        });
	}]);