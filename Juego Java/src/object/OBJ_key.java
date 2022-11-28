package object;

import java.io.FileInputStream;
import java.io.IOException;
import javax.imageio.ImageIO;


public class OBJ_key extends SuperObject{
    
    public OBJ_key(){
        name = "Key";
        try {
            image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/object/key.png"));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
