package com.ctm.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ctm.demo.model.Usuario;
import com.ctm.demo.service.UsuarioService;

@CrossOrigin("*")
@RestController
public class UsuarioController {
    
    private UsuarioService usuarioService;

    public UsuarioController(@Autowired UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    @PostMapping("/Usuario/save")
    public void guardarUsuario(@RequestBody Usuario usuario){
        usuarioService.guardarUsuario(usuario);
    }

    @PutMapping("/Usuario/update")
    public void actualisarUsuario(@RequestBody Usuario usuario){
        usuarioService.updateUsuario(usuario);
    }

    @GetMapping("/Usuario/findAll")
    public List<Usuario> todoslosUsuarios(){
        return usuarioService.allUsuarios();
    }

    @DeleteMapping("/Usuario/{id}")
    public void eliminarUsuario(@PathVariable Long id){
        usuarioService.eliminarUsuario(id);
    }
}
