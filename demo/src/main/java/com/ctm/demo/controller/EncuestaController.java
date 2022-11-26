package com.ctm.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.ctm.demo.model.Encuesta;
import com.ctm.demo.service.EncuestaService;

@CrossOrigin("*")
@RestController
public class EncuestaController {
    
    private EncuestaService encuestaService;

    public EncuestaController(@Autowired EncuestaService encuestaService){
        this.encuestaService = encuestaService;
    }

    @PostMapping("/Encuesta/save")
    public void guardarEncuesta(@RequestBody Encuesta encuesta){
        encuestaService.guardarEncuesta(encuesta);
    }

    @PutMapping("/Encuesta/update")
    public void updateEncuesta(@RequestBody Encuesta encuesta){
        encuestaService.updateEncuesta(encuesta);
    }

    @GetMapping("/Encuesta/findAll")
    public List<Encuesta> allEncuestas(){
        return encuestaService.allEncuestas();
    }

    @DeleteMapping("/Encuesta/{id}")
    public void eliminarUsuario(@PathVariable Integer id){
        encuestaService.eliminarEncuesta(id);
    }
}
