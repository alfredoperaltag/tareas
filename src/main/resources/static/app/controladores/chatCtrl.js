let stompClient = null;

app.controller('chatCtrl', function($scope){
	$scope.enviar=function(){
		console.log("enviar");
		stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
	}
});


function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}