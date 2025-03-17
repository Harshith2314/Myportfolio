function pivkmove(userMove) {
    let move = computerPick();

    let result;
    if(userMove === 'rock'){
        if(move === 'rock')
            result='Tie';

    else if(move === 'paper')
        result = 'Tie';
    else if(move === 'scissor')
        result = 'youlost'
    else 
    result = 'you won the game'
else {
    if(move === 'scissor')
        result = 'Tie';
    else if (move === 'rock')
        

}
 
    else if(move )








    alert(`user move $(userMove)``computer move $ (move)`);
}


function Computerpick{
    const no = Math.random();

    if(no >= 0 && no < 1/3){
        return'rock'
    }
    else if(no >= 1/3 && no < 2/3){
        return'papper'
    }
    else if(no >= 2/3 && no < 1){
        return'scissor'
    }
}