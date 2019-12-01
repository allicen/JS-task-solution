function SnakesLadders() {
    this.gameField = new Map([
        [2, 38],
        [7, 14],
        [8, 31],
        [15, 26],
        [16, 6],
        [21, 42],
        [28, 84],
        [36, 44],
        [46, 25],
        [49, 11],
        [51, 67],
        [62, 19],
        [64, 60],
        [71, 91],
        [74, 53],
        [78, 98],
        [87, 94],
        [89, 68],
        [92, 88],
        [95, 75],
        [99, 80]
    ]);

    this.players = {
        firstPlayer : 0,
        secondPlayer : 0,
        start : 1
    };
}

SnakesLadders.prototype.play = function(die1, die2) {
    let points = die1 + die2;
    let player = (this.players.start === 1) ? this.players.firstPlayer : this.players.secondPlayer;
    let number = (this.players.start === 1) ? 1 : 2;

    if((this.players.firstPlayer === 100 || this.players.secondPlayer === 100) && points > 0){
        return 'Game over!';
    }

    player += points;

    if(player > 100){
        player = 100 - (player - 100);
    }

    if(this.gameField.get(player) !== undefined){
        player = this.gameField.get(player);
    }

    if(number === 1){
        this.players.firstPlayer = player;
    }else{
        this.players.secondPlayer = player;
    }

    if(player < 100){
        if(die1 !== die2){
            this.players.start = (number === 1) ? 2 : 1;
        }
        return 'Player ' + number + ' is on square ' + player;
    }else {
        return 'Player ' + number + ' Wins!';
    }
};





var game = new SnakesLadders();
console.log(game.play(1, 1));
console.log(game.play(1, 5));
console.log(game.play(6, 2));
console.log(game.play(1, 1));
