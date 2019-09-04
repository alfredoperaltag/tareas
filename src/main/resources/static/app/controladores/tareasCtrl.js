app.controller('tareasCtrl', function ($scope, tareasService, $location, sessionFactory, chatFactory) {
	
	$scope.desconectar = function(){
		if (stompClient !== null) {
	        stompClient.disconnect();
	    }
	    chatFactory.desconectado();
	    console.log("Disconnected");
	}
	
	$scope.cerrarSession = function (){
		sessionFactory.clear()
		$scope.cambiarVista('/');
		$scope.desconectar();
	}
	
	$scope.cambiarVista = function (ruta) {
        $location.path(ruta);
    };
	
	if (sessionFactory.get('usuario')!== null){
        //console.log("SESIOnDATA", sessionData);
        $scope.suma = 3 + 3;
        //$scope.tarea = {};
        $scope.listarTareas = {};
        //$scope.tareaEditar = {};

        $scope.cancelar = function(){
        	$scope.tarea = null;
        }
        
        $scope.verSeccion = function () {
            $scope.tarea = {};
        };

        $scope.obtenerTarea = function () {
        	$scope.usuario = sessionFactory.get("usuario");
            tareasService.getById($scope.usuario.id).then((data) => {
                $scope.listarTareas = data;
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });
        }


        $scope.submitForm = function (esValido) {
            if (esValido) {
                if ($scope.tarea.id) {
                    //aqui se actualiza la tarea
                    $scope.editarTarea();

                } else {
                    //aqui se registra
                	$scope.tarea.usuario = $scope.usuario;
                    $scope.enviarTarea();
                }
            } else {
                Swal.fire(
                    '¡error!',
                    '¡Faltan Datos!',
                    'error'
                )
            }
        }


        $scope.enviarTarea = function () {
            tareasService.post($scope.tarea).then((respuesta) => {

                if (respuesta === true) {
                    $scope.tarea = {};
                    Swal.fire(
                        '¡OK!',
                        '¡Se registro correctamente!',
                        'success'
                    )
                    $scope.tarea = null;
                    $scope.obtenerTarea();
                } else {
                    console.log("ERROR");
                }
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });

        }

        $scope.iniciarEdicion = function (tarea) {
            $scope.tarea = tarea;
            $scope.tarea.fecha = new Date(tarea.fecha)
            //        $scope.verSeccion('Editar');
        }


        $scope.editarTarea = function () {
            tareasService.put($scope.tarea).then((respuesta) => {
                if (respuesta === true) {
                    Swal.fire(
                        '¡OK!',
                        '¡Se edito correctamente!',
                        'success'
                    )
                    $scope.tarea = null;
                    $scope.obtenerTarea();
                } else {
                    console.log("ERROR");
                }
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });

        }

        $scope.borrarTarea = function (tarea) {
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
                    tareasService.delete(tarea).then((respuesta) => {
                        if (respuesta === true) {
                            Swal.fire(
                                'Eliminado!',
                                'La tarea se borro correctamente .',
                                'success'
                            )
                            $scope.tarea = null;
                            $scope.obtenerTarea();
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
            $scope.obtenerTarea();
        }

        angular.element(document).ready(function () {
            initController();
        })
    } else{
    	$scope.cambiarVista('/');
    }
})