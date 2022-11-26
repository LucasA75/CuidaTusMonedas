package com.ctm.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ctm.demo.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
    
}
