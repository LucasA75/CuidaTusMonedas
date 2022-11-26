package com.ctm.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ctm.demo.model.Progreso;

public interface ProgresoRepository extends JpaRepository<Progreso,Integer> {
    
}
