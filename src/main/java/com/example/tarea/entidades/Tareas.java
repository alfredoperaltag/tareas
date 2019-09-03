package com.example.tarea.entidades;

import java.util.Date;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name = "tareas")
public class Tareas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NotNull
    @Size(min = 2,max = 40)
    @Column(length = 40,nullable = false)
	private String Titulo;
	
	@NotNull
    @Column(nullable = false)
	private Date Fecha;
	
	@Column(columnDefinition = "TEXT")
	private String Descripcion;
	
	@ManyToOne
	@JoinColumn(name="usuario_id")
	private Usuario usuario;
	
	public Tareas() {
	}
	
	
	public Tareas(int id, @NotNull @Size(min = 2, max = 40) String titulo, @NotNull Date fecha, String descripcion) {
		super();
		this.id = id;
		Titulo = titulo;
		Fecha = fecha;
		Descripcion = descripcion;
	}
	

	public Tareas(@NotNull @Size(min = 2, max = 40) String titulo, @NotNull Date fecha, String descripcion) {
		super();
		Titulo = titulo;
		Fecha = fecha;
		Descripcion = descripcion;
	}
	

	public Tareas(int id, @NotNull @Size(min = 2, max = 40) String titulo, @NotNull Date fecha, String descripcion,
			Usuario usuario) {
		super();
		this.id = id;
		this.Titulo = titulo;
		this.Fecha = fecha;
		this.Descripcion = descripcion;
		this.usuario = usuario;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitulo() {
		return Titulo;
	}

	public void setTitulo(String titulo) {
		Titulo = titulo;
	}

	public Date getFecha() {
		return Fecha;
	}

	public void setFecha(Date fecha) {
		Fecha = fecha;
	}

	public String getDescripcion() {
		return Descripcion;
	}

	public void setDescripcion(String descripcion) {
		Descripcion = descripcion;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	@Override
	public String toString() {
		return "Tareas [id=" + id + ", Titulo=" + Titulo + ", Fecha=" + Fecha + ", Descripcion=" + Descripcion
				+ ", usuario=" + usuario + "]";
	}
	
}
