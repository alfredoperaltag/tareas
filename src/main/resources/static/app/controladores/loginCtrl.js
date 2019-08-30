app.controller('loginCtrl', function ($scope, usuarioService) {
	
	$scope.verSeccion = function () {
        //$scope.tarea = {};
    };
    
    
	
	$scope.submitForm = function (esValido) {
        if (esValido) {
        	console.log("ENVIADO", $scope.login);
            usuarioService.postLogin($scope.login).then((respuesta) => {
                console.log("respuesta: "+respuesta);
                if (respuesta) {
                    $scope.usuario = {};
                    Swal.fire(
                        '¡OK!',
                        '¡Inicio sesion!',
                        'success'
                    )
                    
                    //$scope.usuario = null;
                    //$scope.obtenerTarea();
                } else {
                	Swal.fire(
                            '¡NO!',
                            '¡Nombre o contraseña incorrectos!',
                            'error'
                        )
                    console.log("ERROR");
                }
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });
        } else {
            Swal.fire(
                '¡error!',
                '¡Faltan Datos!',
                'error'
            )
        }
    }
	
	
	const initController = function () {
    	//$scope.obtenerTarea();
    }

    angular.element(document).ready(function () {
    	initController();
    })
	
	
})