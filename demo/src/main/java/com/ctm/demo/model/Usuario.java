package com.ctm.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.GenerationType;

import java.util.List;

import javax.persistence.*;

@Entity(name = "usuario")
public class Usuario {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)

    private Integer id;
    private String nombre;
    private String nickname;
    private String apellido;
    private Integer ano;
    @Column(unique = true)
    private String email;
    private String pais;
    private String region;
    private Integer telefono;
    private String password;


    //Relacion one to one con Monedero
    @OneToOne(mappedBy = "usuario")
    private Monedero monedero;

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

    public Usuario(Integer id, String nombre, String nickname, String apellido, Integer ano, String email, String pais,
            String region, Integer telefono, String password, Monedero monedero, Encuesta encuesta,
            List<Leccion> leccion) {
        this.id = id;
        this.nombre = nombre;
        this.nickname = nickname;
        this.apellido = apellido;
        this.ano = ano;
        this.email = email;
        this.pais = pais;
        this.region = region;
        this.telefono = telefono;
        this.password = password;
        this.monedero = monedero;
        this.encuesta = encuesta;
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

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Monedero getMonedero() {
        return monedero;
    }

    public void setMonedero(Monedero monedero) {
        this.monedero = monedero;
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



        //La relacion entre las tablas user y authority -> Authority no recibe la FK
   /*  @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "authority_usuario", joinColumns = @JoinColumn(name = "usuario_id"), inverseJoinColumns = @JoinColumn(name = "authority_id"))
    private List<Authority> authority;
 */


    

       
}
