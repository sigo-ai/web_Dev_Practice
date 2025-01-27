let boxes=document.querySelectorAll(".box");
let btns=["red","yellow","green","purple"];
let body=document.querySelector("body");
let h4=document.querySelector("h4");
let starter="false";
let gameseq=[];
let userseq=[];
let level=0;
let highscore=0;
let h3=document.querySelector("h3");

body.addEventListener("keypress",function(){
    if(starter=="false"){
        console.log("game started");
        levelup();
        starter="true";
    }
})

function levelup(){
    userseq=[];
    level++;
    highscore=level;
    h4.innerText=`level ${level}`;

    let rndidx=Math.floor(Math.random()*4);
    let rndcolor=btns[rndidx];
    let box=document.querySelector(`.${rndcolor}`)
    btnflash(box);
    gameseq.push(rndcolor);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup(),1000);
        }
        
    }else{
        h4.innerHTML=`well played your score is ${level}<br> press any key to Restart`;
        h3.innerHTML=`Highest score: ${highscore}`;
        gameseq=[];
        userseq=[];
        level=0;     
        starter="false";
        body.style.backgroundColor="red";
        setTimeout(()=>{
            body.style.backgroundColor="";
        },1000)
    }
}

function btnflash(box){
    box.classList.add("white");
    setTimeout(function(){
        box.classList.remove("white");
    },500);

};

for(box of boxes){
        box.addEventListener("click",function(){
            userflash(this);
            adduserseq(this);
            let idx=userseq.length-1;
            checkAns(idx);
        })
    }

function userflash(box){
    box.classList.add("black");
    setTimeout(function(){
        box.classList.remove("black");
    },250);
}



function adduserseq(box){
    let seq=box.getAttribute("id");
     userseq.push(seq);
    console.log(gameseq);
      console.log(userseq);
}
