package com.ctm.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ctm.demo.model.Leccion;
import com.ctm.demo.service.LeccionService;

@CrossOrigin("*")
@RestController
public class LeccionController {
    
    private LeccionService leccionService;

    public LeccionController(LeccionService leccionService){
        this.leccionService = leccionService;
    }

    @PostMapping("/Leccion/save")
    public void guardarleccion(@RequestBody Leccion leccion){
        leccionService.guardarleccion(leccion);
    }

    @PutMapping("/Leccion/update")
    public void updateleccion(@RequestBody Leccion leccion){
        leccionService.updateleccion(leccion);
    }

    @GetMapping("/Leccion/findAll")
    public List<Leccion> allleccions(){
        return leccionService.allLeccion();
    }

    @DeleteMapping("/Leccion/{id}")
    public void eliminarUsuario(@PathVariable Integer id){
        leccionService.borrarleccion(id);
    }

}
