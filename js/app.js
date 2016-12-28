// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/*

canvas.width = 505;
canvas.height = 606;

*/

// all enemies array
var allEnemies = [];

// enemy #1
var enemy1 = new Enemy();

// enemy #2
var enemy2 = new Enemy();
enemy2.x = 120;
enemy2.y = 150;

// add to enemies team
allEnemies.push(enemy1, enemy2);

// create the player
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
