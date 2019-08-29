package com.example.tarea;

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
import com.example.tarea.servicios.UsuarioService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UsuarioApplicationTests {
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
    @Qualifier("UsuarioService")
	private UsuarioService usuarioService;
    
    @Test
    public void agregarUsuario() {
        try{
            Usuario usuario = new Usuario("Alfredo","Peralta","García","administrador","toor");
            if (usuarioService.agregarUsuario(usuario)){
                log.info("se agrego el usuario correctamente");
            }else{
                log.warn("no fue posible agregar a la usuario");
            }
        }catch (Exception ex){
            log.error(ex.getMessage());
        }
    }
    
    @Test
    public void obtenerUsuario(){
        try {
            Usuario usuario = usuarioService.obtenerUsuario(0);
            if (usuario != null){
                log.info("Se obtuvo el usuario: \n"+usuario.toString());
            }else {
                log.warn("no se encontro el usuario");
            }
        }catch (Exception ex){
            log.error(ex.getMessage());
        }
    }
    
    @Test
    public void actualizarUsuario(){
        try {
            if (usuarioService.obtenerUsuario(3) != null){
                Usuario usuario = new Usuario("Alfredo","Peralta","García","administrador","toor");
                usuarioService.actualizarUsuario(usuario);
                log.info("se actualizo el usuario");
            }else{
                log.warn("No se encontro el usuario");
            }
        }catch (Exception ex){
            log.error(ex.getMessage());
        }
    }

    @Test
    public void borrarUsuario(){
        Usuario usuario = usuarioService.obtenerUsuario(2);
        try{
            if (usuario != null){
                if (usuarioService.borrarUsuario(usuario)){
                    log.info("se elimino el usuario");
                }else {
                    log.warn("no se elimino el usuario");
                }
            }else{
                log.warn("no se encontro el usuario");
            }
        }catch (Exception ex){
            log.error(ex.getMessage());
        }
    }

    @Test
    public void listarUsuario(){
        try {
            List<Usuario> usuario = usuarioService.listarUsuario();
            if (usuario != null){
                for (Usuario usuarios : usuario){
                    log.info(usuarios.toString());
                }
            }else {
                log.warn("No se pudieron listar los usuario");
            }
        }catch (Exception ex){
            log.error("No se encontro la usuario"+ex.getMessage());
        }
    }
}
