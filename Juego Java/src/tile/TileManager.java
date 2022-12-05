package tile;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.awt.*;
import javax.imageio.ImageIO;

import main.GamePanel;

public class TileManager {
    
    GamePanel gp;
    public Tile[] tile;
    public int mapTileNum[][];

    //constructor
    public TileManager(GamePanel gp){
        this.gp = gp;

        tile = new Tile[37];
        mapTileNum = new int [gp.maxWorldCol][gp.maxWorldRow];
        getTileImage();
        loadMap("/Generation/Juego Java/res/maps/world01.txt");

    }

    public void getTileImage(){

        try {

            tile[0] = new Tile();// hierba 
            tile[0].image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/tiles/002.png"));

            tile[1] = new Tile();//pared
            tile[1].image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/tiles/032.png"));
            tile[1].collision = true;

            tile[2] = new Tile();//agua
            tile[2].image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/tiles/019.png"));
            tile[2].collision = true;

            tile[6] = new Tile();//escalera
            tile[6].image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/tiles/036.png"));

            tile[5] = new Tile();//desierto -> en el video es 5
            tile[5].image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/tiles/003.png"));

            tile[4] = new Tile();//arbol -> en el video es 4
            tile[4].image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/tiles/016.png"));
            tile[4].collision = true;

            tile[3] = new Tile();//tierra -> en el video es 3
            tile[3].image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/tiles/017.png"));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void setup(int index){
        //AQUI QUEDE EN EL DEBUG
    }

    public void loadMap(String filePath){
        try {
            //Aqui llamamos al archivo de txt
            InputStream is = new FileInputStream(filePath);
            //Con esto podremos leer el formato de txt que le pasamos
            BufferedReader br = new BufferedReader(new InputStreamReader(is));

            int col = 0;
            int row = 0;

            while(col<gp.maxWorldCol && row < gp.maxWorldRow){
                String line = br.readLine(); // esto lee una linea del txt

                while(col < gp.maxWorldCol){
                    String numbers[] = line.split(" ");

                    int num = Integer.parseInt(numbers[col]);

                    mapTileNum[col][row] = num;
                    col++;
                }
                if (col == gp.maxWorldCol){
                    col=0;
                    row++;
                }
            }
            br.close();
        } catch (Exception e) {
            // TODO: handle exception
        }
    }
    public void draw(Graphics2D g2){
        
        int col = 0;
        int row = 0;
        

        // Esto hara el proceso de dibujado de casillas de manera auto
        while(col< gp.maxWorldCol && row < gp.maxWorldRow){

            int tileNum = mapTileNum[col][row];
            //Vamos a crear la camra del mundo
            int worldX = col * gp.titlesize;
            int worldY = row * gp.titlesize;
            int screenX = worldX - gp.player.worldX + gp.player.screenX; // esto es lo que saca la posicion del jugador respecto a donde esta en el mundo
            int screenY = worldY - gp.player.worldY + gp.player.screenY;

            //Esto delimita la creacion del mundo -> para que no se cree todo mientras jugamos
            if( worldX + gp.titlesize > gp.player.worldX - gp.player.screenX && 
                worldX - gp.titlesize - 500< gp.player.worldX + gp.player.screenX &&
                worldY + gp.titlesize > gp.player.worldY - gp.player.screenY &&
                worldY - gp.titlesize - 500 < gp.player.worldY + gp.player.screenY){
            
                g2.drawImage(tile[tileNum].image, screenX, screenY, gp.titlesize,gp.titlesize,null);
            }
            
            col++;


            if(col == gp.maxWorldCol){
                col = 0;
                row++;
            }
        }

        /* Asi podermos probar de manera manual como se veria un Tile
        g2.drawImage(tile[0].image, 0, 0, gp.titlesize,gp.titlesize,null);
        g2.drawImage(tile[1].image, 48, 0, gp.titlesize,gp.titlesize,null);
        g2.drawImage(tile[2].image, 96, 0, gp.titlesize,gp.titlesize,null); */
    }
}
