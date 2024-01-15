function plateau(jeu) {
    let dessin = "";
    for(let i=0; i<jeu.length;i++) {
      dessin += "|";
      for(let j=0; j<jeu[i].length;j++) {
        dessin += "  "+jeu[i][j]+" |";
      }
      dessin += "\n";
    }
    return dessin;
  }
  
  function conditionVictoireUser(jeu, symUser) {
    if((jeu[0][0] === symUser && jeu[0][1] === symUser && jeu[0][2] === symUser) || (jeu[0][0] === symUser && jeu[1][0] === symUser && jeu[2][0] === symUser) || (jeu[1][0] === symUser && jeu[1][1] === symUser && jeu[1][2] === symUser) || (jeu[2][0] === symUser && jeu[2][1] === symUser && jeu[2][2] === symUser) || (jeu[0][1] === symUser && jeu[1][1] === symUser && jeu[2][1] === symUser) || (jeu[0][2] === symUser && jeu[1][2] === symUser && jeu[2][2] === symUser) || (jeu[0][0] === symUser && jeu[1][1] === symUser && jeu[2][2] === symUser) || (jeu[2][0] === symUser && jeu[1][1] === symUser && jeu[0][2] === symUser)) {
      userWin = 1;
    }
    return userWin;
  }
  
  function conditionVictoireBot(jeu, symUser) {
    if((jeu[0][0] === symBot && jeu[0][1] === symBot && jeu[0][2] === symBot) || (jeu[0][0] === symBot && jeu[1][0] === symBot && jeu[2][0] === symBot) || (jeu[1][0] === symBot && jeu[1][1] === symBot && jeu[1][2] === symBot) || (jeu[2][0] === symBot && jeu[2][1] === symBot && jeu[2][2] === symBot) || (jeu[0][1] === symBot && jeu[1][1] === symBot && jeu[2][1] === symBot) || (jeu[0][2] === symBot && jeu[1][2] === symBot && jeu[2][2] === symBot) || (jeu[0][0] === symBot && jeu[1][1] === symBot && jeu[2][2] === symBot) || (jeu[2][0] === symBot && jeu[1][1] === symBot && jeu[0][2] === symBot)) {
      botWin = 1;
    }
    return botWin;
  }
  
  function roundBot() {
    let ligneBot = 0;
    let colonneBot = 0;
    while(true) {
      ligneBot = Math.round(Math.random() * (2 - 0) + 0);
      colonneBot = Math.round(Math.random() * (2 - 0) + 0);
      if(jeu[ligneBot][colonneBot] === null) {
        break;
      }
    }
    jeu[ligneBot][colonneBot] = symBot;
  }
  
  let jeu = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  let symboles = [
    "X",
    "O"
  ];
  let symUser = "";
  let symBot = "";
  let ligneUser = 0;
  let colonneUser = 0;
  let userWin = 0;
  let botWin = 0;
  let end = 0;
  //symbole du joueur
  symUser = prompt("Veuillez choisir entre 'X' et 'O'");
  while(symUser !== "X" && symUser !== "O" ) {
      symUser = prompt("Veuillez choisir entre 'X' et 'O'");
  }
  //on recup le symbole du bot
  for(let i=0; i<symboles.length; i++) {
    if(symboles[i] !== symUser) {
      symBot = symboles[i];
    }
  }
  alert(plateau(jeu));
  while(true) {
    ligneUser = Number(prompt("Veuillez choisir une ligne entre 0 et 2"));
    while(isNaN(ligneUser) || ligneUser > 2 || ligneUser < 0) {
      ligneUser = prompt("Veuillez choisir une ligne entre 0 et 2");
    }
    colonneUser = Number(prompt("Veuillez choisir une colonne entre 0 et 2"));
    while(isNaN(colonneUser) || colonneUser > 2 || colonneUser < 0) {
      colonneUser = prompt("Veuillez choisir une colonne entre 0 et 2");
    }
    if(jeu[ligneUser][colonneUser] !== null) {
      alert("Veuillez choisir une case vide");
      continue;
    } else {
      jeu[ligneUser][colonneUser] = symUser;
      alert(plateau(jeu));
      userWin = conditionVictoireUser(jeu, symUser);
      if(userWin === 1) { // on regarde si le joueur à gagné
        alert("Le joueur a gagné");
        break;
      } else { //si le joueur n'a pas gagné on fait jouer le bot
        roundBot();
        alert(plateau(jeu));
        botWin = conditionVictoireUser(jeu, symBot);
        if(botWin === 1) { // on regarde si l'ordinateur à gagné
          alert("L'ordinateur a gagné");
          break;
        }
      }
    }
  }