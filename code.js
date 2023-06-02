let turnMusic=new Audio("tone/1 Second Tone.mp3");
let winMusic=new Audio("tone/mixkit-animated-small-group-applause-523.wav");
let turn=true;
let over=true;
let draw=0;

//check turn
function returnTurn(){
    if(turn){
        return "x";
    }
    else{
        return "o";
    }
}

//wining logic
const whoWins=()=>{
    let texts=document.getElementsByClassName("box");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(element=>{
        if((texts[element[0]].innerText===texts[element[1]].innerText) && (texts[element[1]].innerText===texts[element[2]].innerText) &&(texts[element[0]].innerText!=="")){
            document.getElementsByTagName("h4")[0].innerText="player "+texts[element[0]].innerText+" wins";
            document.getElementById("bunny").style.visibility="visible";
            winMusic.play();
            over=false;
        }
    });
}

//play games
let boxlength=document.querySelectorAll(".box").length;
for(let i=0;i<boxlength;i++){
    document.querySelectorAll(".box")[i].addEventListener("click",function(){
        if(this.innerText===""){
            draw++;
            console.log(turn);
            this.innerText=returnTurn();
            turnMusic.play();
            if(over){
                whoWins(); 
            }
            turn=!turn;
            if(over){
                document.querySelector(".player").innerText=returnTurn();
            }
            if(draw===boxlength && over===true){
                document.getElementsByTagName("h4")[0].innerText="match draws";
            }
            
        }
        else{
            alert("this box is already selected");
        }
    });
}

//reset game
function resetGame(){
    for(let i=0;i<boxlength;i++){
       let fill= document.querySelectorAll(".box")[i];
       if(fill.innerText!==""){
        fill.innerText=null;
       }
    }
    over=true;
    draw=0;
    turn=true;
    document.getElementsByTagName("h4")[0].innerHTML="It's player " +"<span class='player'>x</span>"+" turn";
    document.getElementById("bunny").style.visibility="hidden";
}