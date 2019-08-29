package com.example.tarea.servicios;

import java.util.List;

import com.example.tarea.entidades.Usuario;

public interface UsuarioService {
	public boolean agregarUsuario(Usuario usuario);
	public Usuario obtenerUsuario(int usuarioId);
    public boolean actualizarUsuario(Usuario usuario);
    public boolean borrarUsuario(Usuario usuario);
    public List<Usuario> listarUsuario();
}