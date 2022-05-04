import Phaser from 'phaser'

import * as colors from "../consts/colors"

export default class GameBackground extends Phaser.Scene{



    create(){
        this.add.line(0,250,400,0,500,0xfffff,colors.white,1).setOrigin(0.5,0.5);
        this.add.circle(400,250,50,0xffffff,0).setOrigin(0.5,0.5).setStrokeStyle(2,0xffffff,1);
    }
}