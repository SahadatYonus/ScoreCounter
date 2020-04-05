let winningScoreInput = document.querySelector("input[type='number']");
let p1name = document.querySelector("input[name='player1']");
let p2name = document.querySelector("input[name='player2']");
let infoPage = document.querySelector("div.info");
let playersNames = document.querySelector("div.names");
let wrapper = document.querySelector("div.wrapper");
let congrats = document.querySelector("div.congrats");


function addIntro(){
    setTimeout(function(){
    infoPage.classList.add("appear");
    playersNames.classList.add("appear", "pop");
    infoPage.classList.remove("hide");
    infoPage.style.zIndex = "100";
    wrapper.style.zIndex = "-1";
    p1Button.textContent = "Player 1";
    p2Button.textContent = "Player 2";
    }, 200);
};

function removeIntro() {
    if(p1name.value == "" || p2name.value == "") {
        alert("Please write players' names!");
    } else {
    infoPage.classList.add("hide");
    playersNames.classList.remove("appear", "pop");
    infoPage.classList.remove("appear");
    infoPage.style.zIndex = "0";
    wrapper.style.zIndex = "-1";
    p1Button.textContent = p1name.value;
    p2Button.textContent = p2name.value;
    };
}

function addEnd() {
    wrapper.classList.add("appear");
    congrats.classList.add("appear", "pop");
    wrapper.classList.remove("hide");
    wrapper.style.zIndex = "100";
    infoPage.style.zIndex = "-1";
    [p1Button, p2Button, reset, winningScoreInput].forEach(el => {
        el.classList.add("hide");
    });
}

function removeEnd(){
    wrapper.classList.remove("appear");
    congrats.classList.remove("appear");
    wrapper.classList.add("hide");
    [p1Button, p2Button, reset, winningScoreInput].forEach(el => {
        el.classList.remove("hide");
    });
}

function clear(){
    p1Pts = 0;
    p1Score.textContent = p1Pts;
    p2Pts = 0;
    p2Score.textContent = p2Pts;
    winningScoreInput.value = "";
}

function push(){
    let buttons = [starterButton, p1Button, p2Button, reset, exit, replay];
 
    buttons.forEach(button => {
     button.addEventListener("mousedown", function() {
         this.classList.add("push");
     });
    });
 
    buttons.forEach(button => {
     button.addEventListener("mouseup", function() {
         this.classList.remove("push");
     });
    });
}


function keypress(){
    [p1name, p2name].forEach(el => {
        el.addEventListener("keypress", function(e){
            if(e.which === 13) {
                removeIntro();
            };
        });
    });
}

keypress();

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        addIntro();
    }, 100);
});


let starterButton = document.querySelector("input[type='text'] + button");
starterButton.addEventListener("click", function(){
        push();
        removeIntro();
    
});


const inputs = [winningScoreInput, p1name, p2name];
inputs.forEach(input => {
    input.addEventListener("keyup", function(){
        setTimeout(function(){
            input.blur();
        }, 2200);
});
});



// calculate the score on click and add/remove certain class

let gameOver = false;

let p1Button = document.querySelector("button.p1");
let p1Score = document.querySelector("span.p1-score");

p1Pts = 0;
p2Pts = 0;

p1Button.addEventListener("click", function(){
    push();
    if(!gameOver && winningScoreInput.value !== "") {
        p1Pts++;
        if(p1Pts == winningScoreInput.value) {
            gameOver = true;
            addEnd();
            document.querySelector("div.congrats h1").innerHTML = "Congratulations, <em><strong style='text-transform: uppercase'>" + p1name.value + "</strong></em> !";
        }
        p1Score.textContent = p1Pts;
    } else if (!gameOver && winningScoreInput.value == "") {
        alert("Please enter a winning score.")
    }
});


let p2Button = document.querySelector("button.p2");
let p2Score = document.querySelector("span.p2-score");

p2Button.addEventListener("click", function(){
    push();
    if(!gameOver && winningScoreInput.value != "") {
        p2Pts++;
        if(p2Pts == winningScoreInput.value) {
            gameOver = true;
            addEnd();
            document.querySelector("div.congrats h1").innerHTML = "Congratulations, <em><strong style='text-transform: uppercase'>" + p2name.value + "</strong></em> !";
        }
        p2Score.textContent = p2Pts;
    } else if (!gameOver && winningScoreInput.value == "") {
        alert("Please enter a winning score.")
    }
});


let reset = document.querySelector("button[type='reset']");

reset.addEventListener("click", function(){
    gameOver = false;
    push();
    clear();
    addIntro();
});


let replay = document.querySelector("button.replay");

replay.addEventListener("click", function(){
    gameOver = false;
    push();
    clear();
    addIntro();
    removeEnd();
});


let exit = document.querySelector("button.exit");

exit.addEventListener("click", function(){
    push();
    removeEnd();
    window.close();
})

