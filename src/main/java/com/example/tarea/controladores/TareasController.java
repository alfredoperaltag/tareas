package com.example.tarea.controladores;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.tarea.entidades.Tareas;
import com.example.tarea.servicios.TareasService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping(path = "/")
public class TareasController {
	 private Logger log = LoggerFactory.getLogger(this.getClass());
	 private ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES,false);

	 @Autowired
	 @Qualifier("TareasService")
	 private TareasService tareasService;

	 @RequestMapping(path = "tarea/{id}", method = RequestMethod.GET)
	    public @ResponseBody
	    List<Tareas> tareasUsuario(@PathVariable("id") int idUsuario){
	        try{
	            return tareasService.tareasUsuario(idUsuario);
	        }catch (Exception ex){
	            log.error("ERROR: "+ex.getMessage());
	            return null;
	        }
	}
	 /*@RequestMapping(path = "tareas", method = RequestMethod.GET)
	    public @ResponseBody
	    List<Tareas> listarTareas(){
	        try{
	            return tareasService.listarTareas();
	        }catch (Exception ex){
	            log.error("ERROR: "+ex.getMessage());
	            return null;
	        }
	}*/
	 @RequestMapping(path ="tareas",method = RequestMethod.POST)
	    public @ResponseBody boolean registrarTarea(@RequestBody String tareasJSON){
	        try{
	            Tareas tarea = mapper.readValue(tareasJSON, Tareas.class);
	            log.info("Se recibio del formulario: \n"+tarea.toString());

	            if (tareasService.agregarTarea(tarea)){
	                log.info("Se agrego el tareas correctamente");
	                return true;
	            }
	            return false;
	        }catch (Exception ex){
	            log.error("ERROR: "+ex.getMessage());
	            return false;
	        }
	}
	 @RequestMapping(path="tareas",method = RequestMethod.PUT)
	    public @ResponseBody boolean actualizarTarea(@RequestBody String tareaJSON){
	        try{
	            Tareas tarea = new Tareas();
	            tarea = mapper.readValue(tareaJSON, Tareas.class);
	            log.info("Se recibio del formulario: \n"+tarea.toString());
	            if (tareasService.actualizarTarea(tarea)){
	                log.info("Se actualizo el tarea correctamente");
	                return true;
	            }
	            return false;
	        }catch (Exception ex){
	            log.error("ERROR: "+ex.getMessage());
	            return false;
	        }
	    }
	 
	 @RequestMapping(path = "tareas",method = RequestMethod.DELETE)
	    public @ResponseBody boolean borrarTarea(@RequestBody String tareasJSON){
	        try {
	            if (tareasJSON!=null){
	                Tareas tarea = mapper.readValue(tareasJSON, Tareas.class);
	                return tareasService.borrarTarea(tarea);
	            }
	            log.warn("El archivo llega vacio");
	            return false;
	        }catch (Exception ex){
	            log.error(ex.getMessage());
	            return false;
	        }
	}
}
