package object;

import java.io.FileInputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import main.GamePanel;

public class OBJ_chest extends SuperObject {
    
    GamePanel gp;

    public OBJ_chest(GamePanel gp){
        this.gp = gp;
        name = "chest";
        try {
<<<<<<< HEAD
            image = ImageIO.read(new FileInputStream("/Generation/CuidaTusMonedas/Juego Java/res/object/chest.png"));
=======
            image = ImageIO.read(new FileInputStream("././././res/object/chest.png"));
>>>>>>> ea0d3be5e250b55ad8757bf60b029b5f1cecb27b
            uTool.scaleImage(image, gp.titlesize, gp.titlesize);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
