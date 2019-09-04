app.controller('loginCtrl', function ($scope, usuarioService, $location, sessionFactory) {


    $scope.cambiarVista = function (ruta) {
        $location.path(ruta);
    };

    $scope.conectar= function (){
    	var socket = new SockJS('/gs-guide-websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            setConnected(true);
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/greetings', function (greeting) {
                showGreeting(JSON.parse(greeting.body).content);
            });
        });
    }
    
    function setConnected(connected) {
	    if (connected) {
	        $("#conversation").show();
	    }
	    else {
	        $("#conversation").hide();
	    }
	    $("#greetings").html(""); 
	}
    



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
                    
                    sessionFactory.set('usuario', respuesta);
                    var sessionData = sessionFactory.get('usuario');
                    $scope.conectar();
                    $scope.cambiarVista('tarea');
                    

                    
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