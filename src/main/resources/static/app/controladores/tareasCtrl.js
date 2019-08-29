app.controller('tareasCtrl', function ($scope, tareasService, $location) {
    $scope.suma = 3 + 3;
    //$scope.tarea = {};
    $scope.listarTareas = {};
    $scope.tareaEditar = {};

    $scope.verSeccion = function () {
//        $scope.accion = accion;
    	$scope.tarea= {};
    };

    

    $scope.obtenerTarea = function(){
    	tareasService.get().then((data) => {
            console.log("Ctrl: ", data);
            $scope.listarTareas = data;
        }, (reject) => {
            console.log("Ctrl: ", reject);
        });
    }
    

//    $scope.tarea.titulo=$scope.titulo;
//    $scope.tarea.fecha=$scope.fecha;
//    $scope.tarea.descripcion=$scope.descripcion;
    
    
    $scope.submitForm= function(esValido){
    	if(esValido){
    		if($scope.tarea.id){
    			//aqui se actualiza la tarea
    			$scope.editarTarea();
    			
    		}else{
    			//aqui se registra
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
        
        
        console.log("tarea",$scope.tarea);
        
            tareasService.post($scope.tarea).then((respuesta) => {
            	console.log("respuesta",respuesta);
                if (respuesta===true) {
                	console.log(respuesta);
                	$scope.tarea = {};
                    Swal.fire(
                        '¡OK!',
                        '¡Se registro correctamente!',
                        'success'
                    )
                    $scope.tarea=null;
                    $scope.obtenerTarea();
                } else{
                	console.log("ERROR");
                }
                //console.log("post: ", scope.archivo);
                //$scope.listarTareas = data;
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });
        
    }
    
    $scope.iniciarEdicion = function (tarea) {
        $scope.tarea = tarea;
        $scope.tarea.fecha = new Date(tarea.fecha)
//        $scope.verSeccion('Editar');
    }
    

    $scope.editarTarea = function (esValido) {
        if (esValido) {
        
        console.log("tareaEditar",$scope.tareaEditar);
        
            tareasService.put($scope.tareaEditar).then((respuesta) => {
            	console.log("respuesta",respuesta);
                if (respuesta===true) {
                	console.log(respuesta);
                	//$scope.tarea = {};
                    Swal.fire(
                        '¡OK!',
                        '¡Se edito correctamente!',
                        'success'
                    )
                    $scope.verSeccion('Lista');
                } else{
                	console.log("ERROR");
                }
                //console.log("post: ", scope.archivo);
                //$scope.listarTareas = data;
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
    
    const initController = function(){
    	$scope.obtenerTarea();
    }
    
    angular.element(document).ready(function (){
    	initController();
    })
    
    
})