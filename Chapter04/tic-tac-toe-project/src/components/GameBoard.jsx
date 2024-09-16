
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]];

export default function GameBoard({ onSelectSquare } ) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare (rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => {
                    return (<li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => {
                                return (<li key={colIndex}>
                                    <button onClick={onSelectSquare}>
                                        {playerSymbol}
                                    </button>
                                </li>);
                            })}
                        </ol>
                    </li>);
                })
            }
        </ol>
    )
}