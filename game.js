var bg, drako, col, cursors, col_sprites, door1, door2, door3, door4, doorActivated, loadBlock = false;

var border, text, avatar, choice1, choice2, heart;

/* GLOBAL STATE FLAGS */

var globalPenguinCutsceneTriggered = true;//false;
var globalMlodyDialog1Completed = true;//false;
var globalComputerDialogCompleted = true;//false;
var globalMiszaDialog1Triggered = true;//false;
var globalParrotTaken = true;//false;
var globalParrotDelivered = true;//false;
var globalRyokFirstChatPassed = true;//false;
var globalSucharToldToRyok = true;//false;
var globalLegoDoorDestroyed = false;

/**********************/

var dialogState = 0;
var nextDrakoX = null, nextDrakoY = null;

var transitionPlugin;

var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

game.state.add('level1', level1);
game.state.add('level2', level2);
game.state.add('level3', level3);
game.state.add('level4', level4);
game.state.add('level5', level5);
game.state.add('level6', level6);
game.state.add('level7', level7);

game.state.start('level7');

//takenItem = ITEM_PARROT;
