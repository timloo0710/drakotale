var level1 = {
    preload: function() {
        game.load.image('bg_level1', 'assets/level1.png');

        game.load.spritesheet('drako', 'assets/drako.png', 36, 60);
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        cursors = game.input.keyboard.createCursorKeys();

        game.add.sprite(0, 0, 'bg_level1');

        col = game.add.group();

        game.physics.arcade.enable(col);
        col.enableBody = true;

        col.physicsBodyType = Phaser.Physics.ARCADE;

        makeRectangle(0, 0, 244, 100, col);
        makeRectangle(0, 100, 120, 40, col);
        makeRectangle(161, 100, 60, 40, col);
        makeRectangle(0, 140, 40, 300, col);
        makeRectangle(0, 340, 80, 80, col);
        makeRectangle(0, 380, 120, 80, col);
        makeRectangle(0, 420, 160, 80, col);
        makeRectangle(0, 460, 640, 20, col);
        makeRectangle(440, 420, 100, 80, col);
        makeRectangle(480, 380, 100, 60, col);
        makeRectangle(342, 0, 244, 100, col);
        makeRectangle(480, 100, 244, 40, col);
        makeRectangle(560, 100, 244, 300, col);

        col.visible = false;

        drako = game.add.sprite(280, 220, 'drako');
        game.physics.arcade.enable(drako);

        drako.body.collideWorldBounds = true;
        drako.animations.add('down', [0, 1], 10, true);

        drako.animations.add('up', [2, 3], 10, true);
        drako.animations.add('right', [4, 5], 10, true);
        drako.animations.add('left', [6, 7], 10, true);

        drako.body.setSize(25, 30, 6, 30);
    },

    update: function() {
        var MOVE_SPEED = 170;

        game.physics.arcade.collide(drako, col);

        drako.body.velocity.x = 0;
        drako.body.velocity.y = 0;

        if (cursors.left.isDown) {
            drako.body.velocity.x = -MOVE_SPEED;
            drako.animations.play('left');
        }
        else if (cursors.right.isDown) {
            drako.body.velocity.x = MOVE_SPEED;
            drako.animations.play('right');
        }

        if (cursors.down.isDown) {
            drako.body.velocity.y = MOVE_SPEED;
            if (!cursors.left.isDown && !cursors.right.isDown) drako.animations.play('down');
        }
        else if (cursors.up.isDown) {
            drako.body.velocity.y = -MOVE_SPEED;
            if (!cursors.left.isDown && !cursors.right.isDown) drako.animations.play('up');
        }

        if (!cursors.up.isDown && !cursors.down.isDown && !cursors.left.isDown && !cursors.right.isDown) {
            drako.animations.stop();
            drako.frame -= drako.frame % 2;
        }
    },


}
