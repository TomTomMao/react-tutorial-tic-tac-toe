'use client';
export function TaskFilter({ subSet, onShowAll, onShowActive, onShowCompleted }) {
    return (
        <div>
            <button onClick={onShowAll} disabled={subSet==='all'}>Show all tasks</button>
            <button onClick={onShowActive} disabled={subSet==='active'}>Show active tasks</button>
            <button onClick={onShowCompleted} disabled={subSet==='completed'}>Show completed tasks</button>
        </div>
    );
}
