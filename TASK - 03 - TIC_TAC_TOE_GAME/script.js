const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");

let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function createBoard() {
  boardElement.innerHTML = "";
  cells.forEach((cell, index) => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.setAttribute("data-index", index);
    div.textContent = cell;
    div.addEventListener("click", handleClick);
    boardElement.appendChild(div);
  });
}

function handleClick(e) {
  const index = e.target.getAttribute("data-index");
  if (cells[index] !== "" || !gameActive) return;

  cells[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (checkWin()) {
    statusElement.textContent = `🎉 Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (!cells.includes("")) {
    statusElement.textContent = "🤝 It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusElement.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winConditions.some((combo) => {
    const [a, b, c] = combo;
    return (
      cells[a] &&
      cells[a] === cells[b] &&
      cells[a] === cells[c]
    );
  });
}

function resetGame() {
  cells = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusElement.textContent = `Player ${currentPlayer}'s turn`;
  createBoard();
}

createBoard();