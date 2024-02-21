export const checkWinner = (boardCheck, turn) => {
    const rows = 6;
    const cols = 7;
    const board2D = [];
    for (let i = 0; i < rows; i++) {
      board2D.push(boardCheck.slice(i * cols, (i + 1) * cols));
    }
    
    //Comprobar si existe un ganador en las filas
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j <= cols - 4; j++) {
          const filaWinner = board2D[i].slice(j, j + 4);
          if (checkArray(filaWinner)) {
              return turn; // Hay un ganador
          }
      }
    }
    //Comprobar si existe ganador entre columnas
    for (let i = 0; i <= rows - 4; i++ ){
      for (let j = 0; j < cols; j++){
        if( board2D[i][j] !== null &&
            board2D[i][j] === board2D[i+1][j] &&
            board2D[i][j] === board2D[i+2][j] &&
            board2D[i][j] === board2D[i+3][j] 
        ) {
          console.log(turn)
          return turn;
        }
      }
    }

    // Comprobar diagonales ascendentes (/)
    for (let i = 3; i < rows; i++) {
      for (let j = 0; j < cols - 3; j++) {
        if (board2D[i][j] !== null &&
            board2D[i][j] === board2D[i - 1][j + 1] &&
            board2D[i][j] === board2D[i - 2][j + 2] &&
            board2D[i][j] === board2D[i - 3][j + 3]) {
              console.log(turn);
              return turn;
        }
      }
    }

     // Comprobar diagonales descendentes (\)
    for (let i = 3; i < rows; i++) {
      for (let j = 3; j < cols; j++) {
        if (board2D[i][j] !== null &&
            board2D[i][j] === board2D[i - 1][j - 1] &&
            board2D[i][j] === board2D[i - 2][j - 2] &&
            board2D[i][j] === board2D[i - 3][j - 3]) {
              console.log(turn);
              return turn;
            }
        }
    }
  }

const checkArray = (lista) => {
    return lista.every(elemento => elemento !== null && elemento === lista[0]);
}

export const checkEndGame = (newBoard) => {
    //revisar si existe un empate en el juego 
    //Si no hay mas espacios vacios dentro del tablero y no existe un ganador
    return newBoard.every((square) => square !== null)
}