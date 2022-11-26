package com.ctm.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.ctm.demo.model.Modulo;
import com.ctm.demo.service.ModuloService;

@CrossOrigin("*")
@RestController
public class ModuloController {
    
    private ModuloService moduloService;

    public ModuloController(ModuloService moduloService){
        this.moduloService = moduloService;
    }

    @PostMapping("/Modulo/save")
    public void guardarmodulo(@RequestBody Modulo modulo){
        moduloService.guardarModulo(modulo);
    }

    @PutMapping("/Modulo/update")
    public void updatemodulo(@RequestBody Modulo modulo){
        moduloService.updateModulo(modulo);
    }

    @GetMapping("/Modulo/findAll")
    public List<Modulo> allmodulos(){
        return moduloService.allModulo();
    }

    @DeleteMapping("/Modulo/{id}")
    public void eliminarUsuario(@PathVariable Integer id){
        moduloService.eliminarModulo(id);
    }
}
