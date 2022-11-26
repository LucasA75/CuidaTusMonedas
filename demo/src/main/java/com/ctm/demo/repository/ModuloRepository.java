package com.ctm.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ctm.demo.model.Modulo;

public interface ModuloRepository extends JpaRepository<Modulo,Integer> {
    
}
