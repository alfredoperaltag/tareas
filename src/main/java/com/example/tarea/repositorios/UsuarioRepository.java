package com.example.tarea.repositorios;

import java.io.Serializable;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.tarea.entidades.Usuario;

@Repository("UsuarioRepository")
public interface UsuarioRepository extends CrudRepository<Usuario, Serializable> {
	@Query(value = "SELECT * FROM usuario WHERE nombre = :usuario", nativeQuery = true)
    public Usuario login(@Param("usuario") String usuario);
}
