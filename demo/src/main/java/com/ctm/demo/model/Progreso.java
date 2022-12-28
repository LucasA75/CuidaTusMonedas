package com.ctm.demo.model;

import java.util.Date;
import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

@Entity(name = "progreso")
public class Progreso {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String condicion; // quiero colocar un bit aqui , como 1 completado y 0 incompleto
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date fecha;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;


    //Many to one a buySell
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "leccion_id")
    private Leccion leccion;

    public Progreso() {
    }

    public Progreso(Integer id, String condicion, Date fecha, Usuario usuario, Leccion leccion) {
        this.id = id;
        this.condicion = condicion;
        this.fecha = fecha;
        this.usuario = usuario;
        this.leccion = leccion;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCondicion() {
        return condicion;
    }

    public void setCondicion(String condicion) {
        this.condicion = condicion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Leccion getLeccion() {
        return leccion;
    }

    public void setLeccion(Leccion leccion) {
        this.leccion = leccion;
    }

    
    
}
