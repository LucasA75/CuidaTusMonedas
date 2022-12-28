package com.ctm.demo.model;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.List;

import javax.persistence.*;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;


@Entity(name = "leccion")
public class Leccion {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String nombre;

    //Estoy enviando las lecciones a indice
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "indice_id")
    private Indice indice;

    //Many to Many
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name="progreso", //nombre TB relacional
        joinColumns = @JoinColumn(name="leccion_id"), //nombre de la columna de mi tabla
        inverseJoinColumns = @JoinColumn(name="usuario_id") //nombre de la columna de la tabla de compra y venta
    )
    private List<Usuario> usuario;
    
    public Leccion() {
    }

    public Leccion(Integer id, String nombre, Indice indice, List<Usuario> usuario) {
        this.id = id;
        this.nombre = nombre;
        this.indice = indice;
        this.usuario = usuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Indice getIndice() {
        return indice;
    }

    public void setIndice(Indice indice) {
        this.indice = indice;
    }

    public List<Usuario> getUsuario() {
        return usuario;
    }

    public void setUsuario(List<Usuario> usuario) {
        this.usuario = usuario;
    }

    
}
