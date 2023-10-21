let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","blue","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
    if(!started){
        console.log("Game started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function (){
        btn.classList.remove("flash");
    }, 500);
};

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function (){
        btn.classList.remove("userflash");
    }, 500);
};

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let ranColor = btns[randIdx];
    let radbtn = document.querySelector(`.${ranColor}`);

    gameSeq.push(ranColor);
    console.log("Game seq ",gameSeq);
    gameFlash(radbtn);
};

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> Press any to start game`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
    }
}


function btnpress(){
    let btn = this;
    // console.log(btn);
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userSeq.push(usercolor);
    // console.log(userSeq);
    checkAns(userSeq.length-1);
};

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
};

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

