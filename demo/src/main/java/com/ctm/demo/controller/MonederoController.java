package com.ctm.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ctm.demo.model.Monedero;
import com.ctm.demo.service.MonederoService;

@CrossOrigin("*")
@RestController
public class MonederoController {

    private MonederoService monederoService;

    public MonederoController(MonederoService monederoService){
        this.monederoService = monederoService;
    }

    @PostMapping("/Monedero/save")
    public void guardarMonedero(@RequestBody Monedero monedero){
        monederoService.guardarMonedero(monedero);
    }
    
    @PutMapping("/Monedero/update")
    public void updateMonedero(@RequestBody Monedero monedero){
        monederoService.updateMonedero(monedero);
    }

    @GetMapping("/Monedero/findAll")
    public List<Monedero> allMonedero(){
        return monederoService.allMonedero();
    }

    @DeleteMapping("/Monedero/{id}")
    public void eliminarMonedero (@PathVariable Integer id){
        monederoService.eliminarMonedero(id);
    }
}
