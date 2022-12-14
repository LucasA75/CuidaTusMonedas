package com.ctm.demo.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Passgenerator {

    public static void main(String ...args) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(4);
        //El String que mandamos al metodo encode es el password que queremos encriptar.
        //creo que solo lo usamos en esta ocasión para generar el encriptado
	System.out.println(bCryptPasswordEncoder.encode("1234"));

    }
    
}
