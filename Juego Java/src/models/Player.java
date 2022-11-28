package models;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.FileInputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import main.GamePanel;
import main.KeyHandler;

public class Player extends Entity {
    
    GamePanel gp;
    KeyHandler keyH;

    public final int screenX;
    public final int screenY;

    //constructor
    public Player(GamePanel gp, KeyHandler keyH){

        this.gp = gp;
        this.keyH = keyH;
        // Aqui modificamos la camara del jugador
        screenX = gp.screenHeigth/2 + 70 ;
        screenY = gp.screenWidth/3;

        solidArea = new Rectangle(8,16,32,32);

        setDefaultValues();
        getPlayerImage();
    }
    
    public void setDefaultValues(){
        
        worldX = gp.titlesize * 23;
        worldY = gp.titlesize * 21;
        speed = 4;
        direction = "stay";
    }

    public void getPlayerImage(){
        try {
            System.out.println("Image loading started");
            this.stay = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/player/stay1.png")); // Esto guarda la imagen
            this.iz = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/player/iz.png"));
            this.iz1 = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/player/iz1.png"));
            this.iz2 = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/player/iz2.png"));
            this.der = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/player/der.png"));
            this.der1 = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/player/der1.png"));
            this.der2 = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/player/der2.png")); 
            System.out.println("Image loading ended");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void update(){

        if(keyH.upPressed == true || keyH.downPressed == true || keyH.leftPressed == true || keyH.rightPressed == true){
            //Aqui estoy modificando la posicion del character
            if(keyH.upPressed== true){
            direction = "up";
        }
        else if(keyH.downPressed == true){
            direction = "down";
        }
        else if(keyH.leftPressed == true){
            direction = "left";
            
        }
        else if( keyH.rightPressed == true){
            direction = "right";
            
        }

        //colisionador
        collisionOn = false;
        gp.checker.checkTile(this);

        // si la colision es falsa , el jugador se movera
        if(collisionOn == false){
            switch(direction){
                case"up":
                worldY = worldY - speed; // esto va como el plano carteciano , arriba worldY derecha + -> abajo worldY izquierda -
                break;
                case "down":
                worldY = worldY + speed;
                break;
                case "left":
                worldX = worldX - speed;
                break;
                case "right":
                worldX = worldX + speed;
                break;
            }
        }

        //Esto es el cambiador de sprites
        spriteCounter++;
        if(spriteCounter > 3){
            if(spriteNum == 1){
                spriteNum =2;
            }
            else if(spriteNum == 2){
                spriteNum = 3;
            }
            else if(spriteNum == 3){
                spriteNum = 1;
            }
            spriteCounter = 0;
        }
        }
        else{
            spriteNum = 1;
        }
    }

    public void draw(Graphics2D g2) {

    /*  g2.setColor(Color.white);
    g2.fillRect(x, worldY, gp.titlesize, gp.titlesize); */

    BufferedImage image = null;

    switch(direction){
        case "up":
        image = stay;
        break;
        
        case "down":
        image = stay;
        break;

        case "left":
        //Aqui se coloca como hacer una iteracion entre mas de 1 sprite
        if(spriteNum == 1){
            image = iz;
        }
        if(spriteNum == 2){
            image = iz1;
        }
        if(spriteNum == 3){
            image = iz2;
        }
        
        break;

        case "right":
        if(spriteNum == 1){
            image = der;
        }
        if(spriteNum == 2){
            image = der1;
        }
        if(spriteNum == 3){
            image = der2;
        }
        break;

    }
    g2.drawImage(image, screenX,screenY, gp.titlesize,gp.titlesize,null); // dibuja una imagen en pantalla
    }
}
