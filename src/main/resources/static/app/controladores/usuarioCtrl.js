app.controller('usuarioCtrl', function ($scope, usuarioService) {
	 $scope.verSeccion = function () {
	        $scope.usuario = {};
	    };
	    
	    $scope.area = [
	        { descripcion: "Administrador" },
	        { descripcion: "Usuario" }
	    ];
	    
	    $scope.obtenerUsuario = function () {
	        usuarioService.get().then((data) => {
	            console.log("Ctrl: ", data);
	            $scope.listaUsuario = data;
	        }, (reject) => {
	            console.log("Ctrl: ", reject);
	        });
	    }

	    const initController = function () {
	        $scope.obtenerUsuario();
	    }

	    angular.element(document).ready(function () {
	        initController();
	    })
})