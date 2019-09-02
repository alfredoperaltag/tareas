package com.example.tarea.repositorios;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.tarea.entidades.Tareas;

@Repository("TareasRepository")
public interface TareasRepository extends CrudRepository<Tareas, Serializable> {
	List<Tareas> findAllByUsuarioId (int idUsuario);

}
