package com.ctm.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ctm.demo.model.Modulo;
import com.ctm.demo.repository.ModuloRepository;



@Service
@Transactional
public class ModuloService {
    
    private ModuloRepository moduloRepository;

    public ModuloService(ModuloRepository moduloRepository){
        this.moduloRepository = moduloRepository;
    }

    public void guardarModulo(Modulo modulo){
        moduloRepository.save(modulo);
    }

    public void updateModulo(Modulo modulo){
        moduloRepository.save(modulo);
    }

    public void eliminarModulo(Integer id){
        moduloRepository.deleteById(id);
    }

    public List<Modulo> allModulo(){
        return moduloRepository.findAll();
    }
}
