package com.example.tarea.implementaciones;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tarea.entidades.Usuario;
import com.example.tarea.repositorios.UsuarioRepository;
import com.example.tarea.servicios.UsuarioService;

@Service("UsuarioService")
public class UsuarioServiceImpl implements UsuarioService {
private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	public UsuarioRepository usuarioRepository;
	
	@Override
	public boolean agregarUsuario(Usuario usuario) {
		try{
            if (usuario != null){
                usuarioRepository.save(usuario);
                log.info("se agrego la usuario: "+usuario.toString());
                return true;
            }else{
                log.warn("no llega la usuario");
                return false;
            }
        }catch (Exception ex){
            log.error("ERROR: "+ex.getMessage());
            return false;
        }
	}
	@Override
    public Usuario obtenerUsuario(int usuarioID){
        try{
            if (usuarioID > 0){
                log.info("Se consulto: ID: "+usuarioID);
                return usuarioRepository.findById(usuarioID).get();
            }
            return null;
        }catch (Exception ex){
            log.error(ex.getMessage());
            return null;
        }
    }
	@Override
    public boolean actualizarUsuario(Usuario usuario){
        try {
            if (usuario != null){
                usuarioRepository.save(usuario);
                log.info(("se actualizo el Tarea: "+usuario.toString()));
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
    public boolean borrarUsuario(Usuario usuario){
        try {
            if (usuario != null){
                usuarioRepository.delete(usuario);
                log.info("Se elimino la usuario");
                return true;
            }
            return false;
        }catch (Exception ex){
            return false;
        }
    }
	@Override
    public List<Usuario> listarUsuario(){
        try{
            return (List<Usuario>) usuarioRepository.findAll();
        }catch (Exception ex){
            log.error(ex.getMessage());
            return null;
        }
	}
}
