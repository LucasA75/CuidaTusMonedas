package com.ctm.demo.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;



@Entity(name = "indice")
public class Indice {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String nombre;

    //estoy enviando un Many to one de modulo
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="modulo_id")
    private Modulo modulo;

    //Estoy recibiendo un one to many a leccion
    @OneToMany(mappedBy = "indice", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Leccion> leccion;

    public Indice(Integer id, String nombre, Modulo modulo, List<Leccion> leccion) {
        this.id = id;
        this.nombre = nombre;
        this.modulo = modulo;
        this.leccion = leccion;
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

    public Modulo getModulo() {
        return modulo;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
    }

    public List<Leccion> getLeccion() {
        return leccion;
    }

    public void setLeccion(List<Leccion> leccion) {
        this.leccion = leccion;
    }

    
}
