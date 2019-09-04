let stompClient = null;

app.controller('chatCtrl', function($scope, sessionFactory){
	
	$scope.usuario = sessionFactory.get("usuario");
	if ($scope.usuario !== null){
		$scope.nombreUsuario=$scope.usuario.nombre;
		$scope.enviar=function(){
			stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
		}
		
	}else{
		$scope.cambiarVista('/');
	}
	
	
});

function showGreeting(message, $scope) {
    $("#greetings").append("<tr><td>"+ message + "</td></tr>");
}