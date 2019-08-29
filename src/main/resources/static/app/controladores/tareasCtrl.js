app.controller('tareasCtrl', function ($scope, tareasService, $location) {
    $scope.suma = 3 + 3;
    //$scope.tarea = {};
    $scope.listarTareas = {};
    //$scope.tareaEditar = {};

    $scope.verSeccion = function () {
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
        console.log("tareaEditar",$scope.tarea);
            tareasService.put($scope.tarea).then((respuesta) => {
            	console.log("respuesta",respuesta);
                if (respuesta===true) {
                	console.log(respuesta);
                    Swal.fire(
                        '¡OK!',
                        '¡Se edito correctamente!',
                        'success'
                    )
                    $scope.tarea=null;
                    $scope.obtenerTarea();
                } else{
                	console.log("ERROR");
                }
            }, (reject) => {
                console.log("Ctrl: ", reject);
            });
       
    }
    
    $scope.borrarTarea = function(tarea){
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
    			  console.log("tareaBorrar",tarea);
    	            tareasService.delete(tarea).then((respuesta) => {
    	            	console.log("respuesta",respuesta);
    	                if (respuesta===true) {
    	                	console.log(respuesta);
    	                	Swal.fire(
    	              		      'Eliminado!',
    	              		      'La tarea se borro correctamente .',
    	              		      'success'
    	              		    )
    	                    $scope.tarea=null;
    	                    $scope.obtenerTarea();
    	                } else{
    	                	console.log("ERROR");
    	                }
    	            }, (reject) => {
    	                console.log("Ctrl: ", reject);
    	            });
    		  }
    		})
    }
    
    const initController = function(){
    	$scope.obtenerTarea();
    }
    
    angular.element(document).ready(function (){
    	initController();
    })
    
    
})