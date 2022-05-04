import Phaser, { Physics } from 'phaser'

import TitleScreen from './scenes/TitleScreen'
import Game from './scenes/Game'
import GameBackground from './scenes/GameBackground'

import * as sceneKeys from './consts/sceneKeys'
import * as colors from './consts/colors'



const config={
    backgroundColor: colors.backgroundColorr,
    width:800,
    height:500,
    type: Phaser.AUTO,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:0},
            debug:false 
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add(sceneKeys.TitleScreen,TitleScreen)
game.scene.add(sceneKeys.Game,Game)
game.scene.add(sceneKeys.GameBackground,GameBackground)

game.scene.start(sceneKeys.TitleScreen,TitleScreen)
// game.scene.start(sceneKeys.Game)