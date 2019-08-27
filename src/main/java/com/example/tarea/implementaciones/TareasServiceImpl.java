package com.example.tarea.implementaciones;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tarea.entidades.Tareas;
import com.example.tarea.repositorios.TareasRepository;
import com.example.tarea.servicios.TareasService;

@Service("TareasService")
public class TareasServiceImpl implements TareasService{
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	public TareasRepository tareasRepository;
	
	@Override
	public boolean agregarTarea(Tareas tarea) {
		try{
            if (tarea != null){
                tareasRepository.save(tarea);
                log.info("se agrego el Tarea: "+tarea.toString());
                return true;
            }else{
                log.warn("El Tarea esta vacio");
                return false;
            }
        }catch (Exception ex){
            log.error("ERROR: "+ex.getMessage());
            return false;
}
	}
	@Override
    public Tareas obtenerTarea(int TareaID){
        try{
            if (TareaID > 0){
                log.info("Se consulto: ID: "+TareaID);
                return tareasRepository.findById(TareaID).get();
            }
            return null;
        }catch (Exception ex){
            log.error(ex.getMessage());
            return null;
        }
    }

    @Override
    public boolean actualizarTarea(Tareas Tarea){
        try {
            if (Tarea != null){
                tareasRepository.save(Tarea);
                log.info(("se actualizo el Tarea: "+Tarea.toString()));
                return true;
            }else{
                log.warn("El Tarea llega vacio");
                return false;
            }
        }catch (Exception ex){
            log.error("ERROR: "+ex.getMessage());
            return false;
        }
    }

    @Override
    public boolean borrarTarea(Tareas Tarea){
        try {
            if (Tarea != null){
                tareasRepository.delete(Tarea);
                log.info("Se elimino el Tarea");
                return true;
            }
            return false;
        }catch (Exception ex){
            return false;
        }
    }

    @Override
    public List<Tareas> listarTareas(){
        try{
            return (List<Tareas>) tareasRepository.findAll();
        }catch (Exception ex){
            log.error(ex.getMessage());
            return null;
        }
}
}
