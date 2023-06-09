'use client'
import { useState } from "react"
import { TaskList } from "./TaskList"
import { ITask } from "./ITask"
import { TaskFilter } from "./TaskFilter"
import { TaskAdder } from "./TaskAdder"
export default function App({ }) {
    const [tasks, setTasks] = useState<Array<ITask>>(initialTasks)
    const [subSet, setSubset] = useState<string>('all')
    let tasksToShow: Array<ITask>;
    if (subSet === 'all') {
        tasksToShow = tasks
    } else if (subSet === 'active') {
        tasksToShow = tasks.filter(task=>!task.done)
    } else {
        tasksToShow = tasks.filter(task=>task.done)
    }
    function handleToggleDone(taskId: number) {
        setTasks(
            tasks.map(task => {
                if (task.id === taskId) {
                    return {
                        ...task,
                        done: !task.done
                    }
                } else {
                    return task
                }
            })
        )
    }
    function handleDelete(taskId: number) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    function handleSave(taskId: number, newTitle: string) {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    title: newTitle
                }
            } else {
                return task
            }
        }))
    }
    function handleAdd(taskTitle: ITask['title']) {
        setTasks([...tasks, {
            id: tasks.reduce((a, b) => {
                if (a < b.id) {
                    return b.id
                } else {
                    return a
                }
            }, -1) + 1,
            title: taskTitle,
            done: false
        }
        ])
    }
    function handleShowAll() {
        setSubset('all');
    }
    function handleShowActive() {
        setSubset('active');
    }
    function handleShowCompleted() {
        setSubset('completed');
    }
    return (
        <>
            <h1>
                What needs to be done?
            </h1>
            <TaskAdder onAdd={handleAdd} />
            <TaskFilter subSet={subSet} onShowAll={handleShowAll} onShowActive={handleShowActive} onShowCompleted={handleShowCompleted}/>
            <TaskList tasks={tasksToShow} onToggleDone={handleToggleDone} onDelete={handleDelete} onSave={handleSave} />
        </>
    )
}
const initialTasks: Array<ITask> = [
    {
        id: 0,
        title: "Eat",
        done: false
    },
    {
        id: 1,
        title: "Sleep",
        done: false
    },
    {
        id: 2,
        title: "Repeat",
        done: false
    }
]

