let timer = 60;
let score = 0;
let hitrn = 0;

function setScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

function newhitVal() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubbles() {
  let bubbles = "";

  for (let i = 0; i <= 149; i++) {
    let rn = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubbles">${rn}</div>`;
  }

  document.querySelector("#navbtm").innerHTML = bubbles;
}

function runTime() {
  let timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#navbtm").innerHTML = `<h1>GAME OVER</h1>`
    }
  }, 1000);
}

document.querySelector("#navbtm").addEventListener("click",(dets)=>{
    let bubblehit = Number(dets.target.textContent);
    if(bubblehit === hitrn){
        setScore();
        newhitVal();
        makeBubbles();
    }
})


newhitVal();
runTime();
makeBubbles();
