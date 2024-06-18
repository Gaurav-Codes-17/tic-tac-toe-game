let boxes = document.querySelectorAll(".boxes");
let newGameBtn = document.querySelector(".new-game-btn");
let resetGameBtn = document.querySelector("#reset-game-btn");
let msg = document.querySelector(".msg");
let turn = 1;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === 1) {
      box.innerText = "O";
      turn = 0;
    } else {
      box.innerText = "X";
      turn = 1;
    }
    box.disabled = true;

    checkPattern();
  });
});
let resetGame = () => {
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};
resetGameBtn.addEventListener("click", resetGame);

let newGame = () => {
  for (box of boxes) {
    box.innerText = "";
    box.disabled = false;
    newGameBtn.classList.add("hide");
    msg.classList.add("hide");
  }
};
newGameBtn.addEventListener("click", newGame);

let disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let showWinner = (posVal) => {
  msg.classList.remove("hide");
  msg.innerText = `THE WINNER IS ${posVal}`;
  msg.style.backgroundColor = "#7cfc00";
  newGameBtn.classList.remove("hide");
};

let checkPattern = () => {
  for (pattern of winPattern) {
    let posVal = boxes[pattern[0]].innerText;
    let posVal1 = boxes[pattern[1]].innerText;
    let posVal2 = boxes[pattern[2]].innerText;

    if (posVal != "" && posVal1 != "" && posVal2 != "") {
      if (posVal === posVal1 && posVal1 === posVal2) {
        boxes.disabled = true;
        disableBoxes();
        showWinner(posVal);
      }
    }
  }
};
