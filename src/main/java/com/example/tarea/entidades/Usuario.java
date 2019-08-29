package com.example.tarea.entidades;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Usuario")
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

	@Override
	public String toString() {
		return "Usuario [Id=" + Id + ", Nombre=" + Nombre + ", Paterno=" + Paterno + ", Materno=" + Materno + ", Tipo="
				+ Tipo + ", Password=" + Password + "]";
	}	
	
}
