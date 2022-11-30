package com.ctm.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ctm.demo.model.Monedero;

public interface MonederoRepository extends JpaRepository<Monedero,Integer> {
    
}
