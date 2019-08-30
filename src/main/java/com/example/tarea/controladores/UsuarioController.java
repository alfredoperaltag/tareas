package com.example.tarea.controladores;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.tarea.entidades.Usuario;
import com.example.tarea.servicios.UsuarioService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping(path = "/")
public class UsuarioController {
	private Logger log = LoggerFactory.getLogger(this.getClass());
	private ObjectMapper mapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_IGNORED_PROPERTIES,false);
	
	@Autowired
	@Qualifier("UsuarioService")
	private UsuarioService usuarioService;
	
	@RequestMapping(path = "usuario", method = RequestMethod.GET)
    public @ResponseBody
    Usuario login(@RequestBody String usuarioJSON){
        try{
            return usuarioService.login(usuarioJSON);
        }catch (Exception ex){
            log.error("ERROR: "+ex.getMessage());
            return null;
        }
	}
	
	//@RequestMapping(path = "usuario", method = RequestMethod.GET)
    public @ResponseBody
    List<Usuario> listarUsuario(){
        try{
            return usuarioService.listarUsuario();
        }catch (Exception ex){
            log.error("ERROR: "+ex.getMessage());
            return null;
        }
	}
	
	@RequestMapping(path ="usuario",method = RequestMethod.POST)
    public @ResponseBody boolean registrarUsuario(@RequestBody String usuarioJSON){
        try{
            Usuario usuario = mapper.readValue(usuarioJSON, Usuario.class);
            log.info("Se recibio del formulario: \n"+usuario.toString());

            if (usuarioService.agregarUsuario(usuario)){
                log.info("Se agrego la usuario correctamente");
                return true;
            }
            return false;
        }catch (Exception ex){
            log.error("ERROR: "+ex.getMessage());
            return false;
        }
	}

	@RequestMapping(path="usuario",method = RequestMethod.PUT)
    public @ResponseBody boolean actualizarUsuario(@RequestBody String usuarioJSON){
        try{
            Usuario usuario = new Usuario();
            usuario = mapper.readValue(usuarioJSON, Usuario.class);
            log.info("Se recibio del formulario: \n"+usuario.toString());
            if (usuarioService.actualizarUsuario(usuario)){
                log.info("Se actualizo la usuario correctamente");
                return true;
            }
            return false;
        }catch (Exception ex){
            log.error("ERROR: "+ex.getMessage());
            return false;
        }
    }

	@RequestMapping(path = "usuario",method = RequestMethod.DELETE)
    public @ResponseBody boolean borrarUsuario(@RequestBody String usuarioJSON){
        try {
            if (usuarioJSON!=null){
                Usuario usuario = mapper.readValue(usuarioJSON, Usuario.class);
                return usuarioService.borrarUsuario(usuario);
            }
            log.warn("La usuario llega vacio");
            return false;
        }catch (Exception ex){
            log.error(ex.getMessage());
            return false;
        }
}
}
