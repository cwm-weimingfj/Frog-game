var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // setting initial location
    this.x = 0;
    this.y = 60;

    // setting speed
    this.speed = 50;


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // make enemy moving right
    this.x += this.speed * dt;
    //console.log(this.x);


    // move the enemy to orgin x if over the canvas
    if (this.x > 505) {
        this.x = 0;
    }

    //logPosition(this);

    // check collision
    if ((this.x + 85 > player.x) &&
        (this.x < player.x + 101) &&
        (this.y + 60 > player.y) &&
        (this.y < player.y)
    ) {
        console.log("collided");

        // reset player's position
        player.x = player.y = 404;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


/* debug location */
function logPosition(enemy) {
    console.log('enemy x:' + enemy.x + ' enemy y:' + enemy.y);
}
