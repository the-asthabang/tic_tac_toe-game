console.log("Welcome to Tic Tac Toe")
let happy = new Audio("tune2.mp3")
let audioTurn = new Audio("tune3.mp3")
let gameover = new Audio("tune1.mp3")
let turn = "X"





// Function to change the turn
const changeTurn = ()=>{
    audioTurn.play();

    return  turn === "X"? "0": "X";

}

const turnButton = () =>{

    
    let info = document.querySelector('.info');
    let turnbtn = info.querySelector('.turn');
    let x = turnbtn.querySelector('.x');
    let o = turnbtn.querySelector('.o'); 
    
    if(turn === "0"){
       x.style.backgroundColor = "rgb(56,56,203";
       o.style.backgroundColor = "rgb(125,125,230)";

    }
    else if(turn === "X"){
      x.style.backgroundColor = "rgb(125,125,230)";
      o.style.backgroundColor = "rgb(56,56,203";
    }
    
 
}


  
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],    
    [2,4,6],
]



// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let box=document.getElementsByClassName('box')
   
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.winner').getElementsByTagName('h2')[0].innerHTML = boxtext[e[0]].innerText + " Won";
            
            happy.play();
            
            document.querySelector('.winner').getElementsByTagName('img')[0].style.width = "390px",height="400px";
            document.querySelector('.winner').getElementsByTagName('h2')[0].style.fontSize = "4vw";
            document.querySelector('#game_center').style.display="none";
            
            box[e[0]].style.background="green";
            box[e[1]].style.background="green";
            box[e[2]].style.background="green";

        
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            turn=changeTurn()
            boxtext.innerText = turn;
            turnButton();
            audioTurn.play();
            checkWin();   
            
        }
    })
})


    



// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        happy.pause()
        element.innerText = ""
    });
    turn = "X"; 
    turnButton()
    let box=document.getElementsByClassName('box')

   
    
    document.querySelector('.winner').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.winner').getElementsByTagName('h2')[0].style.fontSize = "0vw"

    document.querySelector('#game_center').style.display="flex", gap="6vw" ; flexDirection="row", justifyContent= "center", alignItems="center";
    
    wins.forEach(e =>{
      box[e[0]].style.background="rgb(76,76,89)";
      box[e[1]].style.background="rgb(76,76,89)";
      box[e[2]].style.background="rgb(76,76,89)";
    })   
})

