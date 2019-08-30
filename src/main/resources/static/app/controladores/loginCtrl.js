app.controller('loginCtrl', function ($scope, usuarioService) {
	
	$scope.submitForm = function (esValido) {
        if (esValido) {
        	console.log("ENVIADO", $scope.login);
            usuarioService.postLogin($scope.login).then((respuesta) => {
                console.log("respuesta{", respuesta,"}");
                console.log(respuesta);
                if (respuesta != null) {
                    console.log(respuesta);
                    $scope.usuario = {};
                    Swal.fire(
                        '¡OK!',
                        '¡Inicio sesion!',
                        'success'
                    )
                    //$scope.usuario = null;
                    //$scope.obtenerTarea();
                } else {
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
	
	
})