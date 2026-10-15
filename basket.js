let scoreEl0 = document.getElementById("score0");
let score0=0;

let scoreEl1= document.getElementById("score1")
let score1=0;
function inc1z(){
    score0++;
    scoreEl0.innerText=score0;
    scoreEl1.innerText=score1;
}

function inc2z(){
    score0+=2;
    scoreEl0.innerText=score0;
    scoreEl1.innerText=score1;
}

function inc3z(){
    score0+=3;
    scoreEl0.innerText=score0;
    scoreEl1.innerText=score1;
}

function inc1o(){
    score1++;
    scoreEl0.innerText=score0;
    scoreEl1.innerText=score1;
}

function inc2o(){
    score1+=2;
    scoreEl0.innerText=score0;
    scoreEl1.innerText=score1;
}

function inc3o(){
    score1+=3;
    scoreEl0.innerText=score0;
    scoreEl1.innerText=score1;
}

function rematch(){
    score0=0;
    scoreEl0.innerText=score0;

    score1=0;
    scoreEl1.innerText=score1;
}

function winner(){
    if(score0>score1){
        scoreEl0.innerText="W";
        scoreEl1.innerText="l";
    }
    else if (score1>score0) {
        scoreEl0.innerText="L";
        scoreEl1.innerText="W";
    } else {
        scoreEl0.innerText="D";
        scoreEl1.innerText="D";
    }
    score0=0
    score1=0
}
