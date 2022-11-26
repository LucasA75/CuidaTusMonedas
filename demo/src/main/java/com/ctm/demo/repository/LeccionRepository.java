package com.ctm.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ctm.demo.model.Leccion;

public interface LeccionRepository extends JpaRepository<Leccion,Integer>{
    
}
