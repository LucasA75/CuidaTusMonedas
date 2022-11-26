package com.ctm.demo.service;

import java.util.List;


import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ctm.demo.model.Encuesta;
import com.ctm.demo.repository.EncuestaRepository;

@Service
@Transactional
public class EncuestaService {
    
    private EncuestaRepository encuestaRepository;

    public EncuestaService(EncuestaRepository encuestaRepository){
        this.encuestaRepository = encuestaRepository;
    }

    public void guardarEncuesta(Encuesta encuesta){
        encuestaRepository.save(encuesta);
    }

    public void updateEncuesta(Encuesta encuesta){
        encuestaRepository.save(encuesta);
    }

    public void eliminarEncuesta(Integer id){
        encuestaRepository.deleteById(id);
    }

    public List <Encuesta> allEncuestas(){
        return encuestaRepository.findAll();
    }
}
