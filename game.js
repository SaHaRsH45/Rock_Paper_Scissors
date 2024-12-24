const score=JSON.parse(localStorage.getItem('score')) ||  { wins: 0, losses: 0, ties: 0 };
 

     
    function pickbyComputer(){
     const randomNumber=Math.random();
     let result='';
     if(randomNumber>=0 && randomNumber<1/3){
       result='Rock';
     }
     else if(randomNumber>=1/3 && randomNumber<2/3){
      result='Paper';
     }
     else{
      result='Scissor';
     }
     return result;
    }
    function updatescores(){
      document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
    }
    function game(move){
      const computerMove=pickbyComputer();
      let result='';

      if(move==='Rock'){
        if(computerMove==='Rock'){
          result='Tie';
          score.ties++;
        }
        else if(computerMove==='Paper'){
          result='You lose';
          score.losses++;
        }
        else{
          result='You won';
          score.wins++;
        }
      }
      else if(move==='Paper'){
        if(computerMove==='Rock'){
          result='You won';
          score.wins++;
        }
        else if(computerMove==='Paper'){
          result='Tie';
          score.ties++;
        }
        else{
          result='You lose';
          score.losses++;
        }
      }
      else{
        if(computerMove==='Rock'){
          result='You lose';
          score.losses++;
        }
        else if(computerMove==='Paper'){
          result='You won';
          score.wins++;
        }
        else{
          result='Tie';
          score.ties++;
        }
      }
       localStorage.setItem('score',JSON.stringify(score));
      document.querySelector('.js-result').innerHTML=`${result}`;
      document.querySelector('.js-moves').innerHTML=`You <img src="${move}-emoji.png" class="move">
      <img src="${computerMove}-emoji.png" class="move">
      Computer`;
      updatescores();
      // alert(`You pick ${move},Computer pick ${computerMove},${result}
      // Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
    }