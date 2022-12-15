select * from ctm.usuario;
insert into ctm.usuario(id, ano, apellido, correo, enabled, nombre, pais, password, region, telefono, username)
VALUES(1,2015,"gutierres","Juanito@gmail.com",1,"Juan","Chile","$2a$04$V1jBUhYu5Q.S0tLb97ByXuXJA5CbUZ3GoBSdr7fgaYR.RpeN2UQ8i","Metropolitana",9583312,"admin");
INSERT INTO ctm.authority (id,authority) VALUES (1,"ROLE_ADMIN");
INSERT INTO ctm.authority_usuario (usuario_id, authority_id) VALUES (1,1);
INSERT INTO ctm.authority_usuario (usuario_id, authority_id) VALUES (1,2);