package com.ctm.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ctm.demo.model.Indice;
import com.ctm.demo.repository.IndiceRepository;



@Service
@Transactional
public class IndiceService {
    
    private IndiceRepository indiceRepository;

    public IndiceService(IndiceRepository indiceRepository){
        this.indiceRepository = indiceRepository;
    }

    public void guardarIndice(Indice indice){
        indiceRepository.save(indice);
    }

    public void updateIndice(Indice indice){
        indiceRepository.save(indice);
    }

    public void borrarIndice(Integer id){
        indiceRepository.deleteById(id);
    }

    public List<Indice> allIndices(){
        return indiceRepository.findAll();
    } 
}
