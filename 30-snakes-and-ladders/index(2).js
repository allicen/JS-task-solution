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
    let player = this.players.start;

    console.log(points + " : " + this.players.firstPlayer + ' = ' + this.players.secondPlayer);

    if((this.players.firstPlayer === 100 || this.players.secondPlayer === 100) && points > 0){
        return 'Game over!';
    }
    if(player === 1){
        this.players.firstPlayer += points;
        if(this.players.firstPlayer > 100){
            this.players.firstPlayer = 100 - (this.players.firstPlayer - 100);
        }
        if(this.gameField.get(this.players.firstPlayer) !== undefined){
            this.players.firstPlayer = this.gameField.get(this.players.firstPlayer);
        }
        if(this.players.firstPlayer < 100){
            if(die1 === die2){
                this.players.start = 1;
            }else {
                this.players.start = 2;
            }
            return 'Player ' + 1 + ' is on square ' + this.players.firstPlayer;
        }else {
            return 'Player ' + 1 + ' Wins!';
        }
    }else{
        this.players.secondPlayer += points;
        if(this.players.secondPlayer > 100){
            this.players.secondPlayer = 100 - (this.players.secondPlayer - 100);
        }
        if(this.gameField.get(this.players.secondPlayer) !== undefined){
            this.players.secondPlayer = this.gameField.get(this.players.secondPlayer);
        }
        if(this.players.secondPlayer < 100){
            if(die1 === die2){
                this.players.start = 2;
            }else {
                this.players.start = 1;
            }
            return 'Player ' + 2 + ' is on square ' + this.players.secondPlayer;
        }else {
            return 'Player ' + 2 + ' Wins!';
        }
    }
};


var game = new SnakesLadders();
//console.log(game.play(1, 1));
console.log(game.play(2, 5));
game.play(6, 2);
//console.log(game.play(1, 1));
