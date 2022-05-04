import Phaser from "phaser";

import webFontFile from "./webFontFile"

import { GameBackground } from "../consts/sceneKeys"

import * as colors from "../consts/colors"

export default class Game extends Phaser.Scene{

    init(){

        this.leftScore=0;
        this.rightScore=0;

        this.leftScoreLabel = this.add.text(200,150,this.rightScore,{
            fontSize:50,
            fontFamily: '"DM Sans"'
        }).setOrigin(0.5,0.5);
        this.rightScoreLabel = this.add.text(600,350,this.leftScore,
        {
            fontSize:50,
            fontFamily: '"DM Sans"'
        }).setOrigin(0.5,0.5);

    }

    preload(){

        const fonts =new webFontFile(this.load,'DM Sans');
        this.load.addFile(fonts);
        this.load.existing;

        


    }
    create(){
        this.scene.run(GameBackground);
        this.scene.sendToBack(GameBackground);


        this.physics.world.setBounds(-100,0,1000,500);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.ball= this.add.circle(400,250,12, colors.ballColor ,1); 
        this.physics.add.existing( this.ball);
        this.ball.body.setCircle(12);

        const angle=Phaser.Math.Between(0,360);
        const vectorBall=this.physics.velocityFromAngle(angle);


        this.ball.body.setVelocity(vectorBall.x*Phaser.Math.Between(10,14),vectorBall.y*Phaser.Math.Between(3,6));
        this.ball.body.setCollideWorldBounds(true,1,1);
        this.ball.body.setBounce(1,1.1);

        this.leftPaddle=this.add.rectangle(40,250,8,100,0xffffff,1);
        this.physics.add.existing(this.leftPaddle,true);
        this.physics.add.collider(this.leftPaddle, this.ball);
        this.leftPaddle.setInteractive();
    
    
        this.paddleRight = this.add.rectangle(760,250,8,100,0xffffff,1);
        this.physics.add.existing(this.paddleRight,true);
        this.physics.add.collider(this.paddleRight, this.ball);


    
        

       

    }
    update(){
      
        this.updatePlayerMovement();
        this.updateAI();
        this.updateScores();
      
       
    }
    updatePlayerMovement(){

        this.leftPaddle.on('drag', function (pointer, gameObject, dragX, dragY) {

            this.leftPaddle.x = dragX;
            this.leftPaddle.y = dragY;
                       
        });
            
      
        if(this.cursors.up.isDown) {
            this.leftPaddle.y -=3;
    
           }
            else if(this.cursors.down.isDown) {
            this.leftPaddle.y +=3;
            }
            this.leftPaddle.body.updateFromGameObject();
    }
    updateAI(){
        const diff= this.paddleRight.y-this.ball.y
        if(Math.abs(diff)>50){
            if(diff>0){
                this.paddleRight.y-=3;
                this.paddleRight.body.updateFromGameObject(); 
            }
            else{
                this.paddleRight.y+=3;
                this.paddleRight.body.updateFromGameObject();
            }
  

        }


    }
    updateScores(){
        if(this.ball.x < -50){
            this.leftScore+=1;
            console.log(this.leftScore);
            this.rightScoreLabel.text= this.leftScore;
            this.ball.x=400;
            this.ball.y=250;
            const angle=Phaser.Math.Between(0,360);
            const vectorBall=this.physics.velocityFromAngle(angle);
            this.ball.body.setVelocity(vectorBall.x*Phaser.Math.Between(10,14),vectorBall.y*Phaser.Math.Between(3,6));
        }   
        if(this.ball.x > 850){
            this.rightScore+=1;
            this.leftScoreLabel.text= this.rightScore;
            this.ball.x=400;
            this.ball.y=250;
            const angle=Phaser.Math.Between(0,360);
            const vectorBall=this.physics.velocityFromAngle(angle);
            this.ball.body.setVelocity(vectorBall.x*Phaser.Math.Between(10,14),vectorBall.y*Phaser.Math.Between(3,6));
        }

    }

    
   

        

}