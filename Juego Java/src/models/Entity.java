package models;
import java.awt.image.BufferedImage;
import java.awt.*;;

public class Entity {
    
    public int worldX,worldY;
    public int speed;

    //Con esto guardaremos nuestros archivos
    public BufferedImage der,der1,der2,iz,iz1,iz2,stay;
    public String direction;

    public int spriteCounter = 0;
    public int spriteNum = 1;
    public Rectangle solidArea; // podemos crear un rectangulo de colision
    public int solidAreaDefaultX,solidAreaDefaultY;
    public boolean collisionOn = false;
}
