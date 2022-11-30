package com.ctm.demo.service;


import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ctm.demo.model.Monedero;
import com.ctm.demo.repository.MonederoRepository;

@Service
@Transactional
public class MonederoService {

    private MonederoRepository monederoRepository;

    public MonederoService(MonederoRepository monederoRepository){
        this.monederoRepository = monederoRepository;
    }

    public void guardarMonedero (Monedero monedero){
        monederoRepository.save(monedero);
    }
    public void updateMonedero (Monedero monedero){
        monederoRepository.save(monedero);
    }
    
    public void eliminarMonedero (Integer id){
        monederoRepository.deleteById(id);
    }

    public List<Monedero> allMonedero(){
        return monederoRepository.findAll();
    }
}
