package com.ctm.demo.service;

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
public class UserDetailsServiceImpl implements UserDetailsService {
     //LLamo en el servicio al repositorio
    @Autowired
    UsuarioRepository usuarioRepository;
    
     //como implemento el service llamo a la funcion que declare alli y aqui la relleno
     @Override   //Este throws lo que hace es si la carga del nombre es incorecta tira un error
     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException { //El trows es que tira un error si el Username no es encontrado 
      //Burscar el usuario con el repositorio y si no existe lanzar una exepcion
      com.ctm.demo.model.Usuario appUser = //El lanzamiento del error se lo hago con el .orElseThrow
                usuarioRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("No existe usuario"));
    
     //Mapear nuestra lista de Authority con la de spring security 
    List grantList = new ArrayList();
    for (Authority authority: appUser.getAuthority()) {
         // ROLE_USER, ROLE_ADMIN,..
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(authority.getAuthority());
            grantList.add(grantedAuthority);
    }
        
     //Crear El objeto UserDetails que va a ir en sesion y retornarlo.
     //Esto tiraba un error , por eso hay 2 constructores en User
     //El new User de aqui lo importo de spring security userdetails user ( no lo viste venir xD) 
    UserDetails user = (UserDetails) new User(appUser.getUsername(), appUser.getPassword(), grantList);
        return user;
    }
}
