package com.ctm.demo.config;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ctm.demo.model.Authority;
import com.ctm.demo.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        //vamos a buscar el usuario con el repository y si no existe vamos a lanzar una excepcion
        //NOSOTROS generamos la excepción
        com.ctm.demo.model.Usuario appUser = usuarioRepository.findByUsername(username).orElseThrow(()-> new UsernameNotFoundException(("no existe el usuario")));
        
        //vamos a crear la lista de de Authority con las propiedades de spring security

        List gantList = new ArrayList();

        for(Authority authority: appUser.getAuthority()){
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(authority.getAuthority());
            gantList.add(grantedAuthority);
        }

        //vamos a crear el objeto UserDetails que va air en sesión y también lo va a retornar

        UserDetails user = (UserDetails) new User(appUser.getUsername(), appUser.getPassword(), gantList);
        return user;
    }
    
}
    
