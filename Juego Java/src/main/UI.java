package main;
import java.awt.*;
import java.awt.image.BufferedImage;

import object.OBJ_key;

public class UI {
    //Aqui haremos el Ui del juego 

    GamePanel gp;
    // Por temas de optimizacion lo haremos fuera del loop esta declaracion
    Font arial_40, arial_80B;
    BufferedImage keyImage;
    public boolean messageOn = false;
    public String message = "";
    int messageCounter = 0 ;
    //Para terminar el juego
    public boolean gameFinished = false;
    //Para hacer un timer -> Esto esta en proceso :)
    double playTime;

    public UI(GamePanel gp){
        this.gp = gp;
        //Como se mostrara en el GP  
        arial_40 = new Font("Arial", Font.PLAIN,40);
        arial_80B = new Font("Arial", Font.BOLD,80);
        OBJ_key key = new OBJ_key();
        keyImage = key.image;
    }

    public void showMessage(String text){
        message = text;
        messageOn = true;
    }

    public void draw(Graphics2D g2){

        //Verificamos si terminamos el juego 
        if (gameFinished == true){
        
            g2.setFont(arial_40);
            g2.setColor(Color.white);
        
            String text;
            int textLength;
            int x;
            int y;

            text = "Encontraste el tesoro!";
            textLength = (int)g2.getFontMetrics().getStringBounds(text, g2).getWidth();
            x = gp.screenWidth/2 - textLength/2;
            y = gp.screenHeigth/2 - (gp.titlesize*3);
            g2.drawString(text, x, y);

            g2.setFont(arial_80B);
            g2.setColor(Color.yellow);
            text = "Felicidades!";
            textLength = (int)g2.getFontMetrics().getStringBounds(text, g2).getWidth();
            x = gp.screenWidth/2 - textLength/2;
            y = gp.screenHeigth/2 + (gp.titlesize*2);
            g2.drawString(text, x, y);

            gp.gameThread = null;

            


        }else{

        //Aqui damos la fuente 
        g2.setFont(arial_40);
        g2.setColor(Color.white);
        g2.drawImage(keyImage, gp.titlesize/2, gp.titlesize/2,gp.titlesize,gp.titlesize,null);
        g2.drawString("x "+ gp.player.hasKey, 74, 65);

        //Mensaje
        if(messageOn == true){
            g2.setFont(g2.getFont().deriveFont(30F));
            g2.drawString(message, gp.titlesize/2, gp.titlesize*5);
            //sumo 1 al contador -> como se esta haciendo un loop mientras esto se muestra , el framerate es de 60 por Segundo
            messageCounter++;
            //Por ello aqui 120 son 2 segundos donde se muestra el mensaje en pantalla
            if(messageCounter > 120){
                messageCounter = 0;
                messageOn = false;
            }
        }

    }
    }
}
