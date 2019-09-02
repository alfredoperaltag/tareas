app.controller('loginCtrl', function ($scope, usuarioService, $location, sessionFactory) {


    $scope.cambiarVista = function (ruta) {
        $location.path(ruta);
    };

    



    $scope.submitForm = function (esValido) {
        if (esValido) {
            console.log("ENVIADO", $scope.login);
            usuarioService.postLogin($scope.login).then((respuesta) => {
                console.log("respuesta: ", respuesta);
                if (respuesta) {
                    Swal.fire(
                        '¡OK!',
                        '¡Inicio sesion!',
                        'success'
                    )
                    $scope.cambiarVista('tarea');
                    sessionFactory.set('usuario', respuesta)
                    var sessionData = sessionFactory.get('usuario');
                    console.log("SESIOnDATA", sessionData);
                    
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


    


})