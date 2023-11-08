'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber)
let score = 20;
let highScore =0;
 const  displayMessage = function(message){
   document.querySelector('.message').textContent = message;
 }

// check button
document.querySelector('.check').addEventListener
('click', function(){
   const guess=Number(document.querySelector('.guess').value);

   if(!guess){
   //  document.querySelector('.message').textContent = 'No Number 🧩';
   displayMessage('No Number 🧩');
    //correct guess
   } else if(guess === secretNumber){
      // document.querySelector('.message').textContent = 'Correct Number🎇 ';
      displayMessage('Correct Number🎇 ');

      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.
      backgroundColor = '#60b347';
      document.querySelector('.number').style.
      width = '30rem';

         if(highScore < score){
            document.querySelector('.highscore').textContent = score;
         highValue = highScore;
       } 


   } else if ( guess !== secretNumber){
      if(score > 1){
         // document.querySelector('.message').textContent = guess > secretNumber ? 'Number is Higher 🧩' : 'Number Is low';
        displayMessage( guess > secretNumber ? 'Number is Higher 🧩' : 'Number Is low')
         score--;
         document.querySelector('.score').textContent = score;
      } else{
         document.querySelector('.message').textContent = 'You lost the Game';
         document.querySelector('.score').textContent = score;

      }
   }
   
   // else if (guess > secretNumber){
   //    if(score > 1){
   //       document.querySelector('.message').textContent = 'Number is Higher 🧩';
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else{
   //       document.querySelector('.message').textContent = 'You lost the Game';
   //       document.querySelector('.score').textContent = score;

   //    }
      

   // } else if (guess < secretNumber){
   //    if(score > 1){
   //       document.querySelector('.message').textContent = 'Number is Low 🧩';
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else{
   //       document.querySelector('.message').textContent = 'You lost the Game';
   //       document.querySelector('.score').textContent = score;

   //    }

   // }
})

//again button

document.querySelector('.again').addEventListener
('click',function(){
   score =20;
   secretNumber = Math.trunc(Math.random()*20)+1;
   // document.querySelector('.message').textContent = 'Start guessing...';
   displayMessage('Start guessing...')
   document.querySelector('.guess').value = '';
   document.querySelector('.score').textContent = score;


   document.querySelector('body').style.
     backgroundColor = '#222';
     document.querySelector('.number').style.
     width = '15rem'
})