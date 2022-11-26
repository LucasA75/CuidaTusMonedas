package com.ctm.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.List;

import javax.persistence.*;

@Entity(name = "modulo")
public class Modulo {
    @Id
    @GeneratedValue
    private Integer id;
    private String nombre;

    //Estoy enviando un modulo a los indices
    @OneToMany(mappedBy = "modulo", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Indice> indice;
    
    public Modulo() {
    }

    public Modulo(Integer id, String nombre, List<Indice> indice) {
        this.id = id;
        this.nombre = nombre;
        this.indice = indice;
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

    public List<Indice> getIndice() {
        return indice;
    }

    public void setIndice(List<Indice> indice) {
        this.indice = indice;
    }

    

}   
