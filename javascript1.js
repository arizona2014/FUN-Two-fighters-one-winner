SOLUTION

function declareWinner(fighter1, fighter2, firstAttacker) {
  var winner = false;
  var puncher, victim, winnerFighter;  
  if(firstAttacker === fighter1.name){
    puncher = fighter1;
    victim = fighter2;
  } else {
    puncher = fighter2;
    victim = fighter1;
  }
  while( !winner && puncher ){
    victim.health -= puncher.damagePerAttack;
    if(victim.health >0){
      var aux = puncher;
      puncher = victim;      
      victim = aux;      
    } else {
      winner = true;
      winnerFighter = puncher;
    }
  }
  return winnerFighter.name;
}
