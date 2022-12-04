package object;

import java.io.FileInputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

public class OBJ_Boots extends SuperObject {

    public OBJ_Boots(){
        name = "boots";
        try {
            image = ImageIO.read(new FileInputStream("/Generation/Juego Java/res/object/boots.png"));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

