package com.ctm.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ctm.demo.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    public Optional <Usuario> findByUsername(String username);
    
}
