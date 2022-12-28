package com.ctm.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name="monedero")
public class Monedero {
@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
private Integer cantidad;

//recepcion 1 a 1 entre monedero y usuario
@OneToOne
@JoinColumn(name="usuario_id")
private Usuario usuario;

public Monedero() {
}

public Monedero(Integer id, Integer cantidad, Usuario usuario) {
    this.id = id;
    this.cantidad = cantidad;
    this.usuario = usuario;
}

public Integer getId() {
    return id;
}

public void setId(Integer id) {
    this.id = id;
}

public Integer getCantidad() {
    return cantidad;
}

public void setCantidad(Integer cantidad) {
    this.cantidad = cantidad;
}

public Usuario getUsuario() {
    return usuario;
}

public void setUsuario(Usuario usuario) {
    this.usuario = usuario;
}




}
