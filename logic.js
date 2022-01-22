console.log("Tic Tac Toe Game Using HTML,CSS And JAVASCRIPT");

let music = new Audio("music.mp3");
let MusicTurn = new Audio("ting.mp3");
let gameOverMusic = new Audio("gameover.mp3");
setTimeout(() => {
    alert("Play this game in computer for bettered comfort..")
}, 20000);
music.play();

let Turn = "X";
let Winloss = false;
//function for change the turn
const changeTurn = () => {
    return Turn === "X" ? "0" : "X";
}

//function for check who is won or loss

const checkWinLoss = () => {
    let boxText = document.getElementsByClassName("boxText");

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 6, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            console.log("Enter If Part");
            document.querySelector(".info").innerText = "Turn For " + boxText[e[0]].innerText + " Is Won";

            Winloss = true;
            document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "140px";
            document.querySelector(".line").style.width = "25vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            music.pause();
            gameOverMusic.play();
        } 
    });
}
//play and stop music
let stopMusic = document.getElementById("stopMusic");
stopMusic.addEventListener("click", () => {

    if (!music.paused) {
        music.pause();
        stopMusic.innerText = "Play Music";
    } else {
        music.play();
        stopMusic.innerText = "Stop Music";
    }

});

//Game main logic start here::
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if (boxText.innerText === "") {
            boxText.innerText = Turn;
            Turn = changeTurn();
            MusicTurn.play();
            checkWinLoss();
            if (Winloss == false) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + Turn;
            }
        }
    });
});

// Reset button reset the game
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    Turn = "X";
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn For " + Turn;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "0px";
});
