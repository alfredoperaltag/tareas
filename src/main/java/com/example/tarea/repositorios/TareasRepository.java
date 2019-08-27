package com.example.tarea.repositorios;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.tarea.entidades.Tareas;

@Repository("TareasRepository")
public interface TareasRepository extends CrudRepository<Tareas, Serializable> {

}
