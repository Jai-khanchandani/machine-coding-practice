const initialBoard = Array(9).fill(null);

const WINNING_PATTERNS = [
    [0,1,2],
    
]
const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useSate(true);

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleButtonClick = (index) => {
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    let newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(false);
  };

  return (
    <div>
      Tic tac toe
      {board.map((item, index) => {
        return (
          <button key={index} onClick={() => handleButtonClick(index)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default TicTacToe;
