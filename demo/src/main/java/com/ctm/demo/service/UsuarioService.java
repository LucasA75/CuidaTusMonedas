package com.ctm.demo.service;


import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ctm.demo.model.Usuario;
import com.ctm.demo.repository.UsuarioRepository;

@Service
@Transactional
public class UsuarioService {
    
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    public void guardarUsuario(Usuario usuario){
        usuarioRepository.save(usuario);
    }

    public void updateUsuario(Usuario usuario){
        usuarioRepository.save(usuario);
    }

    public List<Usuario> allUsuarios(){
        return usuarioRepository.findAll();
    }
    public void eliminarUsuario(Long id){
        usuarioRepository.deleteById(id);
    }
}
