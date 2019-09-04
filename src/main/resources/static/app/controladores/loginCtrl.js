app.controller('loginCtrl', function ($scope, usuarioService, $location, sessionFactory, chatFactory) {

	$scope.submitForm = function (esValido) {
        if (esValido) {
            usuarioService.postLogin($scope.login).then((respuesta) => {
                if (respuesta) {
                    Swal.fire(
                        '¡OK!',
                        '¡Inicio sesion!',
                        'success'
                    )
                    sessionFactory.set('usuario', respuesta);
                    $scope.conectar();
                    $scope.cambiarVista('tarea');
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

    $scope.conectar= function (){
    	var socket = new SockJS('/gs-guide-websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            chatFactory.conectado();
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/greetings', function (greeting) {
                showGreeting(JSON.parse(greeting.body).content);
            });
        });
    }

    $scope.cambiarVista = function (ruta) {
        $location.path(ruta);
    };
    
})