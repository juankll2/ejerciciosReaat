import { useState } from "react"
import confetti from "canvas-confetti"
import { TURNS } from "./constants.js"
import { checkWinner, checkEndGame} from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { Board } from "./components/Board.jsx"
import { TurnPlayer } from "./components/TurnPlayer.jsx"
//Tablero de 7 columnas * 6 filas 




function App() {
  //Tablero(6*7) en blanco
  const [board, setBoard] = useState(Array(42).fill(null))
  //El turno inicial es X
  const [turn, setTurn] = useState(TURNS.X)
  //null no ganador, false empate
  const [winner, setWinner] = useState(null) 


  const updateBoard = (index) =>{
    if(winner) return
    const newBoard = [...board]
    // logica para ver cual es la columna
    const column = index > 6 ? index % 7 : index
    //Logica para ver en que casilla debe colocar la ficha
    let position = (7 * 5) + column
    //Verificar si la columna tiene un elemento al final
    while (newBoard[position] !== null){
      //cambiamos a la fila superior
      position = position-7
      // Salir de la función si no hay espacio en la columna
      if (position < 0) {
        console.log("No hay espacio en la columna");
        return; 
      }
    }
    newBoard[position] = turn
    //actualizar el tablero
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si existe un ganador 
    const newWinner = checkWinner(newBoard, turn)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }


  const resetGame = () =>{
    setBoard(Array(42).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  return (
    <main className="board">
      <h1>4 en Raya</h1>
      <button onClick={resetGame}>Reset del juego </button>
      <Board board={board} updateBoard={updateBoard}/>
      <TurnPlayer turn={turn}/>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
