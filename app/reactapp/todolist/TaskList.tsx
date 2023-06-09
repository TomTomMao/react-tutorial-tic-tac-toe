'use client';
import { Key, useState } from "react";
import styles from "./style.module.css";
import { ITask } from "./ITask"

export function TaskList({ tasks, onToggleDone, onDelete, onSave }) {

    return (
        <>
            {tasks.map((task: ITask) => <Task key={task.id}
                task={task}
                onToggleDone={() => onToggleDone(task.id)}
                onDelete={() => onDelete(task.id)}
                onSave={(newTitle: string) => onSave(task.id, newTitle)} />)}
        </>
    );
}
function Task({ task, onToggleDone, onDelete, onSave }) {
    const [isEditting, setIsEditting] = useState(false);
    const [title, setTitle] = useState(task.title);

    if (isEditting) {
        return (
            <div className={styles.task}>
                <input type="checkbox" checked={task.done} name="" id="" onChange={onToggleDone} />
                <input type="text" name="" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={() => {
                    onSave(title);
                    setIsEditting(!isEditting);
                }}>
                    Save
                </button>
                <button onClick={onDelete}>Delete {task.title}</button>
            </div>
        );
    }
    return (
        <div className={styles.task}>
            <input type="checkbox" checked={task.done} name="" id="" onChange={onToggleDone} />
            <label htmlFor="">{task.title}</label>
            <button onClick={() => setIsEditting(!isEditting)}>Edit {task.title}</button>
            <button onClick={onDelete}>Delete {task.title}</button>
        </div>
    );
}
