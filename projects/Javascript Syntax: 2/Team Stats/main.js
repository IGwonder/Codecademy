console.clear()

let team = {
    _players: [
        {firstName: 'Alex', lastName: 'Larsson',age: 25},
        {firstName: 'Rick', lastName: 'Hanssen',age: 40},
        {firstName: 'Björn', lastName: 'Axelsson',age: 30}
    ],
    _games: [
        {opponent: 'Gbg', teamPoints: 42, opponentPoints: 27},
        {opponent: 'Sthlm', teamPoints: 53, opponentPoints: 20},
        {opponent: 'Mlm', teamPoints: 66, opponentPoints: 33}
    ],

    get players() {return this._players},
    get games() {return this._games},

    addplayer(firstName, lastName, age) {
        let player = {firstName, lastName, age};
        this.players.push(player)
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {opponent, teamPoints, opponentPoints};
        this.games.push(game)
    }

};

team.addplayer('Steph', 'Curry', 28);
team.addplayer('Lisa', 'Leslie', 44);
team.addplayer('Bugs', 'Bunny', 76);

team.addGame('Cph', 55, 20);
team.addGame('Dnk', 44, 13);
team.addGame('Cph', 16, 21);


console.log(team.players)
console.log(team.games)