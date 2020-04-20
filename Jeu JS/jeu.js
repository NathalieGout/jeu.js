let userScore = 0;
let computerScore = 0;
let user =document.getElementById("user");
let computer =document.getElementById("computer");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p =  document.querySelector(".resultat > p ");
const pierre_div = document.getElementById("p");
const feuille_div = document.getElementById("f");
const ciseaux_div = document.getElementById("c");
const choix = {"p":"Pierre","f":"Feuille","c":"Ciseaux"};
const computerChoice = getComputerChoice();



// function player(user){
// randomUser = $(user).sort(function(){
// return Math.round(Math.random())-0.2}).slice(0,2);
// alert("le joueur commence!");

// }







function theEndGame(){
if(userScore ===11){
    alert(" Vous avez 10 points ,c'est gagné : )");
        window.location.reload();
}
if(computerScore ===11){
    alert(" Votre adversaire a 10 points, vous avez perdu : )");
    window.location.reload();
}
else if(userScore === computerScore===11){
    alert("Vous étes à égalité!!");
    window.location.reload();
}


}

function getComputerChoice(){// choix random ordi
    const choices =['p','f','c'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertTomot(letter){
    if (letter=== "p") return "Pierre";
    if (letter=== "f") return "Feuille";
    if(letter===  "c") return"Ciseaux";
}

function gagnant(userChoix,computerChoice){
    // console.log("gagné!!");
    
    const userChoix_div = document.getElementById(userChoix);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = convertTomot(userChoix) +  " bat " +  convertTomot(computerChoice) + " Vous gagnez!";
    document.getElementById(userChoix).classList.add('green-glow');
    userChoix_div.classList.add('green-glow');
    // setTimeout(function(){userChoix_div.classList.remove('green-glow')},300);
    setTimeout(()=>userChoix_div.classList.remove('green-glow'),300);
}


function perdant(userChoix,computerChoice){
    
    const userChoix_div = document.getElementById(userChoix);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertTomot(userChoix) + " perd contre " +  convertTomot(computerChoice) +  " Vous perdez!";
    userChoix_div.classList.add('red-glow');
    // setTimeout(function(){userChoix_div.classList.remove('red-glow')},300);
    setTimeout(()=>userChoix_div.classList.remove('red-glow'),300);

}

function tirage(userChoix,computerChoice){
    // console.log("tirage..");
    const userChoix_div = document.getElementById(userChoix);
    result_p.innerHTML = convertTomot(userChoix) + " egalité " +  convertTomot(computerChoice) + " il y a égalité! ";
    userChoix_div.classList.add('yellow-glow',300);
    computerScore_span.innerHTML = computerScore;
    // setTimeout(function(){userChoix_div.classList.remove('yellow-glow')},300);
    setTimeout(()=>userChoix_div.classList.remove('yellow-glow'),300);
} 


function game(userChoix){
    const computerChoice = getComputerChoice();
    switch (userChoix + computerChoice) {
            case "pc":
            case "fp":
            case "cf":
               gagnant(userChoix , computerChoice);
                break;
            case "cp":  
            case "pf":
            case "fc":
            
                perdant(userChoix , computerChoice);
                break;
            case "pp":
            case "ff":
            case "cc":  
                tirage(userChoix , computerChoice);
                break; 
    }
    theEndGame();
}



function main(){

// pierre_div.addEventListener('click' , function()
pierre_div.addEventListener('click', ()=> game("p"));

    // game("p");
    // console.log("tu as cliqué sur pierre!"); pour le test
feuille_div.addEventListener('click' , ()=>game("f"));

    // console.log("tu as cliqué sur feuille!");
    
ciseaux_div.addEventListener('click' , ()=> game("c"));

    // console.log("tu as cliqué sur ciseaux!");
}
main();

