let cells = document.querySelectorAll(".cell");
let restartbtn = document.getElementById("restartBtn");
let is_x_turn = true;

const win_combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  function handle_click(e) {
    let cell = e.target;
    if(cell.textContent !== "") return;

    cell.textContent = is_x_turn ? "X" : "O";

    if(checkWin()) {
        alert((is_x_turn ? "X" : "O") + "Wins!");
        restart_game();
        return;
    }

    if ([...cells].every(c => c.textContent !== "")) {
        alert("Draw!");
        restart_game();
        return;
    }
    is_x_turn = !is_x_turn;
  }

  function checkWin() {
    return win_combos.some(comb => {
        return comb.every(index => {
            return cells[index].textContent === (is_x_turn ? "X" : "O");
        });
    });

  }

  function restart_game() {
    cells.forEach(cell => cell.textContent = "");
    is_x_turn = true;
  }

  cells.forEach(cell => cell.addEventListener("click", handle_click));
  restartbtn.addEventListener("click", restart_game);
