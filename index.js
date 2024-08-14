let maxnum=50;
let guess;
let answer;
let attempt=0;
let ans;
answer=Math.ceil(Math.random()*maxnum);
console.log(answer);
window.alert("welcome to guessing game");   
do{ 
 do {
   guess=window.prompt("guess the number");
   attempt++;
   if(guess<answer)
   {
      window.alert("low");
   }
   if(guess>answer)
   {
      window.alert("high");
   }
} while(guess!=answer)
   if(guess=answer)
   {
      window.alert(`correct answer yay!!
 you took ${attempt} attempt to guess the number`);
   }
   ans=window.prompt("do you want to play again? Y/N ")
   attempt=0;
} while( ans='Y')

console.log("guess");
console.log(guess);
console.log("answer");

console.log("attempt");
console.log(attempt);
