import styles from './page.module.css';

export default function MoveHistoryList({ history, currentMove, ascending }: { history: Array<Array<string | null>>, currentMove:number, ascending: boolean }) {
    let movementList: Array<{ move: number, changedSquareIndex: number } | null> = calculateMovement(history);
    console.log("movehistorylistdata: " , history, movementList)
    if (ascending===false) {
        movementList = movementList.reverse()
    }
    const historyList: Array<React.ReactNode> = movementList.map(function ({ move, changedSquareIndex }: { move: number, changedSquareIndex: number }) {
        const rowId = Math.floor(changedSquareIndex / 3) + 1; // 1 or 2 or 3
        const columnId = changedSquareIndex % 3 + 1 // 1 or 2 or 3
        return <li key={move} className={move==currentMove ? styles.moveHistoryLiCurrent : styles.moveHistoryLi}>step: {move}——row,col: ({rowId},{columnId})</li>
    })
    return (
        <div>
            <ul>
                {historyList}
            </ul>
        </div>
    )
}
function calculateMovement(history: Array<Array<string | null>>) {

    const movementList: Array<{ move: number, changedSquareIndex: number }> = [];
    if (history.length == 1) {
        return [];
    }
    // find the index of the changed square.
    for (let i = 1; i < history.length; i++) {
        const oldBoard: Array<string | null> = history[i - 1];
        const newBoard: Array<string | null> = history[i];
        let changedSquareIndex: number;
        for (let j = 0; j < oldBoard.length; j++) {
            if (oldBoard[j] !== newBoard[j]) {
                changedSquareIndex = j;
                break;
            }
        }
        movementList.push({ move: i, changedSquareIndex: changedSquareIndex })
    }
    return movementList
}