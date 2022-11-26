package com.ctm.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.List;

import javax.persistence.*;

@Entity(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue
    private int id;
    private String nombre;
    private String apellido;
    private Integer ano;
    @Column(unique = true)
    private String correo;
    private String pais;
    private String region;
    private Integer telefono;

    //Relacion one to one
    @OneToOne(mappedBy = "usuario")
    private Encuesta encuesta;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name="progreso",
        joinColumns = @JoinColumn(name="usuario_id"),
        inverseJoinColumns = @JoinColumn(name ="leccion_id")
    )
    private List<Leccion> leccion;

    public Usuario() {
    }

    public Usuario(int id, String nombre, String apellido, Integer ano, String correo, String pais, String region,
            Integer telefono, Encuesta encuesta, List<Leccion> leccion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ano = ano;
        this.correo = correo;
        this.pais = pais;
        this.region = region;
        this.telefono = telefono;
        this.encuesta = encuesta;
        this.leccion = leccion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Integer getAno() {
        return ano;
    }

    public void setAno(Integer ano) {
        this.ano = ano;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public Integer getTelefono() {
        return telefono;
    }

    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }

    public Encuesta getEncuesta() {
        return encuesta;
    }

    public void setEncuesta(Encuesta encuesta) {
        this.encuesta = encuesta;
    }

    public List<Leccion> getLeccion() {
        return leccion;
    }

    public void setLeccion(List<Leccion> leccion) {
        this.leccion = leccion;
    }

    
}
