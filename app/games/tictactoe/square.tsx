import styles from './page.module.css';

export default function Square({ value, onSquareClick }: { value: string | null, onSquareClick: () => void }) {
    return (
        <button className={styles.square} onClick={onSquareClick}>
            {value}
        </button>
    )
}