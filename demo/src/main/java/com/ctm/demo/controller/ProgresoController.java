package com.ctm.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.ctm.demo.model.Progreso;
import com.ctm.demo.service.ProgresoService;

@CrossOrigin("*")
@RestController
public class ProgresoController {
    
    private ProgresoService progresoService;

    public ProgresoController(ProgresoService progresoService){
        this.progresoService = progresoService;
    }

    @PostMapping("/Progreso/save")
    public void guardarleccion(@RequestBody Progreso progreso){
        progresoService.guardarProgreso(progreso);
    }

    @PutMapping("/Progreso/update")
    public void updateprogreso(@RequestBody Progreso progreso){
        progresoService.updateProgreso(progreso);
    }

    @GetMapping("/Progreso/findAll")
    public List<Progreso> allprogresos(){
        return progresoService.allProgreso();
    }

    @DeleteMapping("/Progreso/{id}")
    public void eliminarUsuario(@PathVariable Integer id){
        progresoService.eliminarProgreso(id);
    }

}
