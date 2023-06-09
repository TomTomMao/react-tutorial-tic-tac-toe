'use client';
import { useState } from "react";
import { ITask } from "./ITask";

export function TaskAdder({ onAdd }) {
    const [title, setTitle] = useState<ITask['title']>('');
    return (
        <div>
            title:
            <input type="text" value={title} name="" id="" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => { onAdd(title); }}>Add</button>
        </div>
    );
}
