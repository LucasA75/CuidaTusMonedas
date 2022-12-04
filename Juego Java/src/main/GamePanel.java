package main;

import java.awt.*;

import javax.swing.JPanel;
import javax.swing.plaf.DimensionUIResource;

import models.Player;
import object.SuperObject;
import tile.TileManager;

public class GamePanel extends JPanel implements Runnable{ // esto llama a las funciones de Panel 
    //Esto funciona como el panel de juego

    //Screen Settings
    final int originalTileSize = 16; // 16 px del arte
    //Ya que ahora ocupamos pantallas mas grandes o si no se veria muy pequeño
    //lo escalaremos
    final int scale = 3;
    public final int titlesize = originalTileSize * scale; // 48px tile

    //definir la proporcion de la pantalla
    public final int maxScreenCol = 16;
    public final int maxSreenRow = 12;
    public final int screenWidth = titlesize* maxScreenCol; // 768 px
    public final int screenHeigth = titlesize * maxSreenRow; // 576 px

    //World SETTINGS
    public final int maxWorldCol = 50;
    public final int maxWorldRow = 50;

    //Collision checker
    public Collision checker = new Collision(this);
    
    //FPS
    int  fps = 60;

    //Invocar a TileManager
    TileManager tileM = new TileManager(this);
    //Invocar a KeyHandler
    KeyHandler keyH = new KeyHandler();
    //Invocamos al Audio
    Sound sound = new Sound();
    Sound se = new Sound();
    //Invocamos al Assetsetter
    public AssetSetter aSetter = new AssetSetter(this);
    //Invocamos al UI
    public UI ui = new UI(this);
    //Esto se ocupa para hacer parar el tiempo del juego
    Thread gameThread;



    //invocaremos al Player
    public Player player = new Player(this,keyH);

    //invocamos al objeto
    public SuperObject  obj[] = new SuperObject[10]; // Esto quiere decir que podemos mostrar en pantalla hasta 10 obj



/*     //Setear la posicion por defecto del jugador
// Esto es para probar el sistema la primera vez
    int playerX = 100;
    int playerY = 100;
    int playerSpeed = 4;
 */





    //definimos el constructor
    public GamePanel(){
        //esto es las dimenciones 
        this.setPreferredSize(new DimensionUIResource(screenWidth, screenHeigth));
        //Esto el background del juego
        this.setBackground(Color.white);
        //Esto hara un mejor renderizado del juego
        this.setDoubleBuffered(true);
        //Esto vera las teclas que estoy o no pulsando
        this.addKeyListener(keyH);
        this.setFocusable(true); //Con esto, el gamePanel se concentrara en recibir el input del teclado

    }

    public void setupGame(){
        aSetter.setObject();

        //Aqui reproducimos la musica 
        playMusic(0);
    }

    public void startGameThread(){
        gameThread = new Thread(this);
        gameThread.start();

    }
    //Esto se crea al implementar el runnable
    @Override
    public void run() { // Aqui se creara el core de nuestro juego
        
        double drawInterval = 1000000000/fps; // el numero es 1 seg -> dibujaremos en pantalla cada 0.016666666 seg
        //double nextDrawTime = System.nanoTime() + drawInterval;
        double delta = 0;
        long lastTime = System.nanoTime();
        long currentTime;
        long timer = 0;
        int drawCount = 0;

        
        //Mientras gamethread existe se repite lo siguiente
        while(gameThread != null){
/*             //aqui restringimos los FPS
            //long currentTime = System.nanoTime(); // nanoTime retorna el valor del java virtual machine time en nano segundos
            
            //1 Update : update la informacion como la posicion del personaje
            update();
            //2 draw : dibujar en pantalla con la informacion modificada
            repaint(); // con esto llamamos al paintComponent
            
        
            try {
                 //Esto es el tiempo que queda entre que muestra algo y muestra algo nuevo
                double remainingTime = nextDrawTime - System.nanoTime();
                remainingTime = remainingTime/1000000; // esto lo que hace es por el slepp que acepta solo milisegundos y no nano segundos



                if(remainingTime < 0 ){
                    remainingTime = 0;
                }



                Thread.sleep((long) remainingTime); // esto pausa 

                nextDrawTime = drawInterval + nextDrawTime;



                
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } */


            // ESTA ES OTRA FORMA DE HACER LO DE ARRIBA

            currentTime = System.nanoTime();

            delta = delta + (currentTime - lastTime) / drawInterval;
            timer += (currentTime - lastTime);
            lastTime = currentTime;

            if(delta >= 1){
                update();
                repaint();
                delta--;
                drawCount++;
            }
            if(timer >= 1000000000){
                // System.out.println("FPS"+ drawCount); // Esto muestra los FPS
                drawCount = 0;
                timer = 0;
            }
        }
    }

    public void update(){
    
        player.update();
    }

    //Pintar componentes
    public void paintComponent(Graphics g){ //graphics es una clase que tiene funciones para diobujar objetos en la ventana
        //Este graphics es como un paintbrush
        super.paintComponent(g); // este super llama a JPanel

        Graphics2D g2 = (Graphics2D)g; // Esto nos da mas opciones para trabajar con la geometria del 2D
        //Primero dibujamos los tiles y luego el personaje
        tileM.draw(g2);

        //dibujamos al objeto
        for(int i = 0; i < obj.length; i++){
            if(obj[i] != null){
                obj[i].draw(g2,this);
            }
        }

        //dibujamos al player
        player.draw(g2);
        //UI
        ui.draw(g2);
        g2.dispose(); // dispone de estos graficos contexto y libera cualquier recurso del sistema que se este ocupando
    
    }

public void playMusic(int i){
    sound.setFile(i);
    sound.play();
    sound.loop();
}
public void stopMusic(){
    sound.stop();
}
public void playSE(int i){
    se.setFile(i);
    se.play();

}
}
