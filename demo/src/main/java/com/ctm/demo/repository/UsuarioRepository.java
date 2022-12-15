package com.ctm.demo.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ctm.demo.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    
    //Creo esta funcion para buscar por nombre , ya que por id esta default 
    public Optional<Usuario> findByUsername(String username);
}
