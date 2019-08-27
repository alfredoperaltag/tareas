package com.example.tarea.servicios;

import java.util.List;

import com.example.tarea.entidades.Tareas;

public interface TareasService {
	public boolean agregarTarea(Tareas tarea);
	public Tareas obtenerTarea(int tareaId);
    public boolean actualizarTarea(Tareas tarea);
    public boolean borrarTarea(Tareas tarea);
    public List<Tareas> listarTareas();
}
