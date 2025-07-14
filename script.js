let you =0;
let computer = 0;
const choice = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");
let userscore = document.querySelector("#you");
let computerScore = document.querySelector("#computer");

const computerChoice = () =>{
//for genrating the computer's choice
 let comchoice = ["rock","paper","sissor"]
 let random = Math.floor(Math.random()*3)
 return comchoice[random];

}
let draw =()=>{
    console.log("The game was draw");
    msg.innerText = "The game was draw.please try again";
    msg.style.backgroundColor = "#535252";
};

const showwinner= (userwin)=>{
if(userwin){
    you++
    userscore.innerText = you;
    console.log("you win!");
    msg.innerText = "you win!"
    msg.style.backgroundColor = "green";
} 
else {
    computer++
    computerScore.innerText = computer;
console.log("you lose");
msg.innerText = "you lose..."
msg.style.backgroundColor = "red";
}
}

const playGame = (userchoice) =>{
console.log("user choice ",userchoice)
 let mycomchoice=computerChoice()
console.log("computer's choice ",mycomchoice)

if(userchoice==mycomchoice){
draw();
}
else{
    let userwin = true;
    if(userchoice == "rock"){
        userwin =  mycomchoice == "paper"? false:true;
    }else if(userchoice == "paper"){
        userwin =mycomchoice =="sissor"?false:true;
    }
    else{
        userwin = mycomchoice ==="rock"?flase:true;
    }

    showwinner(userwin);
}

};


choice.forEach((choice)=>{
    
     choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id")
        playGame(userchoice);
       
     })
})