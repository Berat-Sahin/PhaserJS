import Phaser from "phaser";
import webFontFile from "./webFontFile"
import { Game } from "../consts/sceneKeys"



export default class TitleScreen extends Phaser.Scene{
    

    preload(){

    }
    create(){
        const title = this.add.text(400,225,'Green-Pong',{
            fontSize:60,
            fontFamily: '"DM Sans"'
        });
        title.setOrigin(0.5,0.5);
        
        const text =this.add.text(400,275,'Tap to Play',{
            fontSize:20,
            fontFamily: '"DM Sans"'
        });
        
        text.setOrigin(0.5,0.5);

        this.input.on('pointerdown', ()=>{
            this.scene.start(Game)
            
        });


    }
}