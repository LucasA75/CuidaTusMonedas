package main;

import models.Entity;

public class Collision {

    GamePanel gp;
    
    public Collision(GamePanel gp){
        this.gp = gp;
    }

    public void checkTile(Entity entity){
        
        //Aqui estoy colocando los 4 lados del cuadrado de colision
        int entityLeftWorldX = entity.worldX + entity.solidArea.x;
        int entityRightWorldX = entity.worldX + entity.solidArea.x + entity.solidArea.width;
        int entityTopWorldY = entity.worldY + entity.solidArea.y;
        int entityBottomWorldY = entity.worldY + entity.solidArea.y + entity.solidArea.height;

        int entityLeftCol = entityLeftWorldX/gp.titlesize;
        int entityRightCol= entityRightWorldX/gp.titlesize;
        int entityTopRow = entityTopWorldY/gp.titlesize;
        int entityBottomRow = entityBottomWorldY/gp.titlesize;

        int tileNum1, tileNum2;


        switch(entity.direction){
            case "up":

            entityTopRow = ( entityTopWorldY - entity.speed)/gp.titlesize;
            tileNum1 = gp.tileM.mapTileNum[entityLeftCol][entityTopRow];
            tileNum2 = gp.tileM.mapTileNum[entityRightCol][entityTopRow];
            if(gp.tileM.tile[tileNum1].collision == true || gp.tileM.tile[tileNum2].collision == true){

                entity.collisionOn = true;
            }
            break;

            case "down":
            entityBottomRow = ( entityBottomWorldY + entity.speed)/gp.titlesize;
            tileNum1 = gp.tileM.mapTileNum[entityLeftCol][entityBottomRow];
            tileNum2 = gp.tileM.mapTileNum[entityRightCol][entityBottomRow];
            if(gp.tileM.tile[tileNum1].collision == true || gp.tileM.tile[tileNum2].collision == true){

                entity.collisionOn = true;
            }
            break;

            case "left":
            entityLeftCol = ( entityLeftWorldX - entity.speed)/gp.titlesize;
            tileNum1 = gp.tileM.mapTileNum[entityLeftCol][entityTopRow];
            tileNum2 = gp.tileM.mapTileNum[entityLeftCol][entityBottomRow];
            if(gp.tileM.tile[tileNum1].collision == true || gp.tileM.tile[tileNum2].collision == true){

                entity.collisionOn = true;
            }
            break;

            case "right":
            entityRightCol = ( entityRightWorldX + entity.speed)/gp.titlesize;
            tileNum1 = gp.tileM.mapTileNum[entityRightCol][entityTopRow];
            tileNum2 = gp.tileM.mapTileNum[entityRightCol][entityBottomRow];
            if(gp.tileM.tile[tileNum1].collision == true || gp.tileM.tile[tileNum2].collision == true){

                entity.collisionOn = true;
            }
            break;
        }
    }




}
