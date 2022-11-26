package com.ctm.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ctm.demo.model.Progreso;
import com.ctm.demo.repository.ProgresoRepository;

@Service
@Transactional
public class ProgresoService {
    
    private ProgresoRepository progresoRepository;

    public ProgresoService(ProgresoRepository progresoRepository){
        this.progresoRepository = progresoRepository;
    }

    public void guardarProgreso(Progreso progreso){
        progresoRepository.save(progreso);
    }

    public void updateProgreso(Progreso progreso){
        progresoRepository.save(progreso);
    }

    public void eliminarProgreso(Integer id){
        progresoRepository.deleteById(id);
    }

    public List<Progreso> allProgreso(){
        return progresoRepository.findAll();
    }
}
