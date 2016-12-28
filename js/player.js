// player class
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';

    // setting initial location
    this.x = 404;
    this.y = 404;

    this.point = 0;

};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // moving function defined in move()

    // reset player to initial location when reach river.
    if (this.y === -11) {
        this.x = 404;
        this.y = 404;
        this.point++;
        console.log('Good Job. Your point is: ' + this.point);
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Handle player inpuy, required method for game
Player.prototype.handleInput = function(key) {

    switch (key) {
        case 'up':
            this.move('up');
            break;

        case 'down':
            this.move('down');
            break;

        case 'left':
            this.move('left');
            break;

        case 'right':
            this.move('right');
            break;
        default:

    }
};

Player.prototype.move = function(direction, distance) {
    var horizontalDistance = 100;
    var verticalDistance = 83;

    switch (direction) {
        case 'up':

            if (this.y !== -11) {
                distance = verticalDistance;
                this.y -= distance;
                // logPosition(this);
            }

            break;

        case 'down':

            if (this.y !== 404) {
                distance = verticalDistance;
                this.y += distance;
                // logPosition(this);
            }

            break;

        case 'left':
            if (this.x !== 4) {
                distance = horizontalDistance;
                this.x -= distance;
                // logPosition(this);
            }

            break;

        case 'right':
            if (this.x !== 404) {
                distance = horizontalDistance;
                this.x += distance;
                // logPosition(this);
            }
            break;
        default:
    }
}

/* debug location */
function logPosition() {
    console.log('player x:' + player.x + ' player y:' + player.y);
}
