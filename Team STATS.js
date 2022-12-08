const team = {
    _players: [
      {firstName: 'Marc', lastName: 'Felicidario', age: 21},
      {firstName: 'Christiano', lastName: 'Ronaldo', age: 30},
      {firstName: 'Lionel', lastName: 'Messi', age: 30}
    ],
    _games: [
      {opponent: 'France', teamPoints: 3, opponentPoints: 1},
      {opponent: 'Kenya', teamPoints: 5, opponentPoints: 4},
      {opponent: 'Switzerland', teamPoints: 2, opponentPoints: 0}
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game)
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Brazil', 5, 1);
  console.log(team.games);
  