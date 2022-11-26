package com.ctm.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.ctm.demo.model.Indice;
import com.ctm.demo.service.IndiceService;

@CrossOrigin("*")
@RestController

public class IndiceController {
    
    private IndiceService indiceService;

    public IndiceController(IndiceService indiceService){
        this.indiceService = indiceService;
    }

    @PostMapping("/indice/save")
    public void guardarindice(@RequestBody Indice indice){
        indiceService.guardarIndice(indice);    
    }

    @PutMapping("/indice/update")
    public void updateindice(@RequestBody Indice indice){
        indiceService.updateIndice(indice);
    }

    @GetMapping("/indice/findAll")
    public List<Indice> findAllindice(){
        return indiceService.allIndices();
    }

    @DeleteMapping("/indice/delete/{id}")
        public void eliminarindice(@PathVariable Integer id){
            indiceService.borrarIndice(id);
        }
}
