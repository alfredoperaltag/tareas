app.controller('usuarioCtrl', function ($scope, usuarioService, $location, sessionFactory) {

    $scope.cerrarSession = function (){
		sessionFactory.clear()
		$scope.cambiarVista('/');
	}
	
	$scope.cambiarVista = function (ruta) {
        $location.path(ruta);
    };
    
    if (sessionFactory.get('usuario')!== null){
    	$scope.listaUsuario = {};
    	
    	$scope.verSeccion = function () {
            $scope.usuario = {};
        };
        
        $scope.cancelar = function(){
        	$scope.usuario = null;
        }
        
        $scope.areaConocimiento = [
            { descripcion: "Administrador" },
            { descripcion: "Usuario" }
        ];

        $scope.obtenerUsuario = function () {
            usuarioService.get().then((data) => {
                $scope.listaUsuario = data;
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });
        }


        $scope.submitForm = function (esValido) {
            if (esValido) {
                if ($scope.usuario.id) {
                    //aqui se actualiza la tarea
                    $scope.editarUsuario();

                } else {
                    //aqui se registra
                    $scope.enviarUsuario();
                }
            } else {
                Swal.fire(
                    '¡error!',
                    '¡Faltan Datos!',
                    'error'
                )
            }
        }


        $scope.enviarUsuario = function () {
            usuarioService.post($scope.usuario).then((respuesta) => {
                if (respuesta === true) {
                    $scope.usuario = {};
                    Swal.fire(
                        '¡OK!',
                        '¡Se registro correctamente!',
                        'success'
                    )
                    $scope.usuario = null;
                    $scope.obtenerUsuario();
                } else {
                    console.log("ERROR");
                }
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });

        }

        $scope.iniciarEdicion = function (usuario) {
            $scope.usuario = usuario;
            //        $scope.verSeccion('Editar');
        }


        $scope.editarUsuario = function () {
            usuarioService.put($scope.usuario).then((respuesta) => {
                if (respuesta === true) {
                    Swal.fire(
                        '¡OK!',
                        '¡Se edito correctamente!',
                        'success'
                    )
                    $scope.usuario = null;
                    $scope.obtenerUsuario();
                } else {
                    console.log("ERROR");
                }
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });

        }

        $scope.borrarUsuario = function (usuario) {
            Swal.fire({
                title: '¿Estas seguro?',
                text: "¡Esta accion es permante!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Eliminar!'
            }).then((result) => {
                if (result.value) {
                    usuarioService.delete(usuario).then((respuesta) => {
                        if (respuesta === true) {
                            Swal.fire(
                                'Eliminado!',
                                'El usuario se borro correctamente .',
                                'success'
                            )
                            $scope.usuario = null;
                            $scope.obtenerUsuario();
                        } else {
                            console.log("ERROR");
                        }
                    }, (reject) => {
                        console.log("Ctrl: ", reject);
                    });
                }
            })
        }

        const initController = function () {
            $scope.obtenerUsuario();
        }

        angular.element(document).ready(function () {
            initController();
        })

    }else{
    	$scope.cambiarVista('/');
    }
    	
    

})