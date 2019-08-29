app.controller('tareasCtrl', function ($scope, tareasService) {
	$scope.suma = 3 + 3;

	$scope.listarTareas = {};

	tareasService.get().then((data) => {
		console.log(data)
		$scope.listarTareas = data;
	}, (reject) => {
		console.log(reject);
	});
})