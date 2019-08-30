app.controller('usuarioCtrl', function ($scope, usuarioService) {
    //$scope.tarea = {};
    $scope.listaUsuario = {};
    //$scope.tareaEditar = {};

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
            console.log("Ctrl: ", data);
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
        console.log("usuario", $scope.usuario);
        usuarioService.post($scope.usuario).then((respuesta) => {
            console.log("respuesta", respuesta);
            if (respuesta === true) {
                console.log(respuesta);
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
        console.log("usuarioEditar", $scope.usuario);
        usuarioService.put($scope.usuario).then((respuesta) => {
            console.log("respuesta", respuesta);
            if (respuesta === true) {
                console.log(respuesta);
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
                console.log("usuarioBorrar", usuario);
                usuarioService.delete(usuario).then((respuesta) => {
                    console.log("respuesta", respuesta);
                    if (respuesta === true) {
                        console.log(respuesta);
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


})