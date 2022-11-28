package main;
import java.awt.event.*;


//Esto es para hacer un input con el teclado -> que el personaje se mueva mientras toco una tecla
public class KeyHandler implements KeyListener {

    public boolean upPressed, downPressed, leftPressed, rightPressed;

    @Override
    public void keyTyped(KeyEvent e) {
        
    }

    @Override
    public void keyPressed(KeyEvent e) {
        int code = e.getKeyCode(); //retorna un entero keycode con la llave en este evento
        
        if(code == KeyEvent.VK_W){ // al precionar una tecla si esta es la W
            upPressed = true; // dile a uppressed que es true , es false por defecto
        }
        if(code == KeyEvent.VK_S){
            downPressed = true;
        }
        if(code == KeyEvent.VK_A){
            leftPressed = true;
        }
        if(code == KeyEvent.VK_D){
            rightPressed = true;
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {
        int code = e.getKeyCode();

          if(code == KeyEvent.VK_W){ // al soltar una tecla si esta es la W
            upPressed = false; // dile a uppressed que es false 
        }
        if(code == KeyEvent.VK_S){
            downPressed = false;
        }
        if(code == KeyEvent.VK_A){
            leftPressed = false;
        }
        if(code == KeyEvent.VK_D){
            rightPressed = false;
        }
    }
    
}
