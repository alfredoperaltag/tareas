package com.example.tarea.entidades;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	
	@NotNull
    @Size(min = 2,max = 40)
    @Column(length = 40,nullable = false)
	private String Nombre;
	
	@NotNull
    @Size(min = 2,max = 40)
    @Column(length = 40,nullable = false)
	private String Paterno;
	
	@NotNull
    @Size(min = 2,max = 40)
    @Column(length = 40,nullable = false)
	private String Materno;
	
	@NotNull
    @Size(min = 6,max = 13)
    @Column(length = 40,nullable = false)
	private String Tipo;
	
	@NotNull
    @Size(min = 2,max = 40)
    @Column(length = 40,nullable = false)
	private String Password;

	public Usuario() {
		
	}
	

	

	public Usuario(@NotNull @Size(min = 2, max = 40) String nombre, @NotNull @Size(min = 2, max = 40) String password) {
		super();
		Nombre = nombre;
		Password = password;
	}




	public Usuario(int id, @NotNull @Size(min = 2, max = 40) String nombre,
			@NotNull @Size(min = 2, max = 40) String paterno, @NotNull @Size(min = 2, max = 40) String materno,
			@NotNull @Size(min = 6, max = 13) String tipo, @NotNull @Size(min = 2, max = 40) String password) {
		super();
		Id = id;
		Nombre = nombre;
		Paterno = paterno;
		Materno = materno;
		Tipo = tipo;
		Password = password;
	}

	public Usuario(@NotNull @Size(min = 2, max = 40) String nombre, @NotNull @Size(min = 2, max = 40) String paterno,
			@NotNull @Size(min = 2, max = 40) String materno, @NotNull @Size(min = 6, max = 13) String tipo,
			@NotNull @Size(min = 2, max = 40) String password) {
		super();
		Nombre = nombre;
		Paterno = paterno;
		Materno = materno;
		Tipo = tipo;
		Password = password;
	}
	

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public String getPaterno() {
		return Paterno;
	}

	public void setPaterno(String paterno) {
		Paterno = paterno;
	}

	public String getMaterno() {
		return Materno;
	}

	public void setMaterno(String materno) {
		Materno = materno;
	}

	public String getTipo() {
		return Tipo;
	}

	public void setTipo(String tipo) {
		Tipo = tipo;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	@Override
	public String toString() {
		return "Usuario [Id=" + Id + ", Nombre=" + Nombre + ", Paterno=" + Paterno + ", Materno=" + Materno + ", Tipo="
				+ Tipo + ", Password=" + Password + "]";
	}	
	
}
