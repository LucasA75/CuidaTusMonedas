package com.ctm.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ctm.demo.model.Leccion;
import com.ctm.demo.repository.LeccionRepository;

@Service
@Transactional
public class LeccionService {

    private LeccionRepository leccionRepository;

    public LeccionService(LeccionRepository leccionRepository){
        this.leccionRepository = leccionRepository;
    }

    public void guardarleccion(Leccion leccion){
        leccionRepository.save(leccion);
    }

    public void updateleccion(Leccion leccion){
        leccionRepository.save(leccion);
    }

    public void borrarleccion(Integer id){
        leccionRepository.deleteById(id);
    }

    public List<Leccion> allLeccion(){
        return leccionRepository.findAll();
    } 
    
}
