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
    private Long id;
    private String nombre;
    private String username;
    private String apellido;
    private Integer ano;
    @Column(unique = true)
    private String correo;
    private String pais;
    private String region;
    private Integer telefono;
    private String password;
    private Boolean enabled;


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

        //La relacion entre las tablas user y authority -> Authority no recibe la FK
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "authority_usuario", joinColumns = @JoinColumn(name = "usuario_id"), inverseJoinColumns = @JoinColumn(name = "authority_id"))
    private List<Authority> authority;



    public Usuario() {
    }

    

        public Usuario(Long id, String nombre, String username, String apellido, Integer ano, String correo, String pais,
            String region, Integer telefono, String password, Boolean enabled, Monedero monedero, Encuesta encuesta,
            List<Leccion> leccion, List<Authority> authority) {
        this.id = id;
        this.nombre = nombre;
        this.username = username;
        this.apellido = apellido;
        this.ano = ano;
        this.correo = correo;
        this.pais = pais;
        this.region = region;
        this.telefono = telefono;
        this.password = password;
        this.enabled = enabled;
        this.monedero = monedero;
        this.encuesta = encuesta;
        this.leccion = leccion;
        this.authority = authority;
    }

    

        public Long getId() {
            return id;
        }



        public void setId(Long id) {
            this.id = id;
        }



        public String getNombre() {
            return nombre;
        }



        public void setNombre(String nombre) {
            this.nombre = nombre;
        }



        public String getUsername() {
            return username;
        }



        public void setUsername(String username) {
            this.username = username;
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



        public String getPassword() {
            return password;
        }



        public void setPassword(String password) {
            this.password = password;
        }



        public Boolean getEnabled() {
            return enabled;
        }



        public void setEnabled(Boolean enabled) {
            this.enabled = enabled;
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



        public List<Authority> getAuthority() {
            return authority;
        }



        public void setAuthority(List<Authority> authority) {
            this.authority = authority;
        }



        // funcion que permite verificar que el desencriptado y el login fue exitoso
        @Override
        public int hashCode() {
            final int prime = 31;
            int result = 1;
            result = prime * result + ((id == null) ? 0 : id.hashCode());
            return result;
        }
    
        //Esta es la funcion equals
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Usuario other = (Usuario) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }
    
    @Override
    public String toString() {
        return "User [id=" + id + "nombre: "+nombre +", username=" + username + ", password=" + password + "]";
    }
    
}