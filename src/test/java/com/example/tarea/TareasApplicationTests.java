package com.example.tarea;


import java.sql.Date;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.example.tarea.entidades.Usuario;
import com.example.tarea.entidades.Tareas;
import com.example.tarea.servicios.UsuarioService;
import com.example.tarea.servicios.TareasService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TareasApplicationTests {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
    @Qualifier("TareasService")
	private TareasService service;
	
	@Test
    public void agregarTarea() {
        try{
            Tareas Tarea = new Tareas("Ejercicio",Date.valueOf("2019-07-10"),"Realizar flexiones");
            if (service.agregarTarea(Tarea)){
                log.info("se agrego el Tarea correctamente");
            }else{
                log.warn("no fue posible agregar el Tarea");
            }
        }catch (Exception ex){
            log.error(ex.getMessage());
        }
    }

    @Test
    public void obtenerTarea(){
        try {
            Tareas Tarea = service.obtenerTarea(0);
            if (Tarea != null){
                log.info("Se obtuvo el Tarea: \n"+Tarea.toString());
            }else {
                log.warn("no se encontro el Tarea");
            }
        }catch (Exception ex){
            log.error(ex.getMessage());
        }
    }

    @Test
    public void actualizarTarea(){
        try {
            if (service.obtenerTarea(3) != null){
                Tareas Tarea = new Tareas(1,"Ejercicio",Date.valueOf("2019-07-10"),"Realizar sentadillas");
                service.actualizarTarea(Tarea);
                log.info("se actualizo el Tarea");
            }else{
                log.warn("No se encontro el Tarea");
            }
        }catch (Exception ex){
            log.error(ex.getMessage());
        }
    }

    @Test
    public void borrarTarea(){
        Tareas Tarea = service.obtenerTarea(2);
        try{
            if (Tarea != null){
                if (service.borrarTarea(Tarea)){
                    log.info("se elimino el Tarea");
                }else {
                    log.warn("no se elimino el Tarea");
                }
            }else{
                log.warn("no se encontro el Tarea");
            }
        }catch (Exception ex){
            log.error(ex.getMessage());
        }
    }

    @Test
    public void listarTareas(){
        try {
            List<Tareas> Tarea = service.listarTareas();
            if (Tarea != null){
                for (Tareas Tareas : Tarea){
                    log.info(Tareas.toString());
                }
            }else {
                log.warn("No se pudieron listar los Tareas");
            }
        }catch (Exception ex){
            log.error("No se encontro la lista "+ex.getMessage());
        }
}
}