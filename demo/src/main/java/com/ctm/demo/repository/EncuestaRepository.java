package com.ctm.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ctm.demo.model.Encuesta;

public interface EncuestaRepository extends JpaRepository<Encuesta,Integer> {
    
}
