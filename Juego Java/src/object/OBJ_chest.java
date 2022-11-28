package object;

import java.io.FileInputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

public class OBJ_chest extends SuperObject {
    
    public OBJ_chest(){
        name = "chest";
        try {
            image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/object/chest.png"));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
