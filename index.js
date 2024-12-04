let main=document.getElementById("mainheading")
let submain=document.getElementById("submain")
let mainsub=document.getElementById("mainsub")
let sudheading=document.getElementById("sudheading")
let game=document.getElementById("game")
let gameh=document.getElementById("gameh")
let lowhigh=document.getElementById("lowhigh")
let ans=document.getElementById("ans")
let re=document.getElementById("re")
let guess 
let answer
let attempt=0;


function start(){
    submain.style="display:none;"
    main.style="display:none;"
    mainsub.style="display:block"
    sudheading.style="display:block"
}
function play(){
    submain.style="display:none;"
    main.style="display:none;"
    mainsub.style="display:none"
    sudheading.style="display:none"
    game.style="display:block"
    gameh.style="display:block"
    lowhigh.style.display="block"
    attempt=0
    lowhigh.innerHTML="";
   if(document.getElementById("easy").checked)
   {
     gameh.innerHTML="Enter the number between 1 to 50"
     answer=Math.ceil(Math.random()*50)
   }
   if(document.getElementById("normal").checked)
   {
     gameh.innerHTML="Enter the number between 1 to 100"
     answer=Math.ceil(Math.random()*100)
   }
    if(document.getElementById("hard").checked)
   {
     gameh.innerHTML="Enter the number between 1 to 250"
     answer=Math.ceil(Math.random()*250)
   }   
}
function generate(){
   
    let guess = parseInt(document.getElementById("input").value);
    
    console.log(answer)
   
           if(isNaN(guess)){
            lowhigh.innerHTML="Please enter a number";
            return;
           }
           attempt++;
           if(guess>answer)
           {
            lowhigh.innerHTML=`${guess} is higher than answer`;
           }
           if(guess<answer)
           {
             lowhigh.innerHTML=`${guess} is lower than answer`;
           }
           if (answer===guess)
           {
            lowhigh.innerHTML=`That's the right answer. This took you ${attempt} attempts`;
            re.style.display="block"
           }
    }
function restart(){
    main.style.display="block"
    submain.style.display="block"
     game.style="display:none"
    gameh.style="display:none"
    lowhigh.style.display="none"
    re.style.display="none"

}
navigator.geolocation.getCurrentPosition(
  (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`${latitude},${longitude}`);
  }
);
    
  
