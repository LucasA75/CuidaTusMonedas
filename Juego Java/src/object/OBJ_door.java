package object;

import java.io.FileInputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

public class OBJ_door extends SuperObject {
    
    public OBJ_door(){
        name = "door";
        try {
            image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/object/door.png"));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

