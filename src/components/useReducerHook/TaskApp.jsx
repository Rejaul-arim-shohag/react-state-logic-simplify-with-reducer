import { useState } from "react";
import { AddTask } from "./AddTask";
import TaskList from "./TaskList";

export const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

export const TaskApp = () => {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id: initialTasks.length++,
                text: text,
                done: false,
            },
        ]);
    }

    function handleChangeTask(task) {
        setTasks(
            tasks.map((t) => {
                if (t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        );
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }
    return (
        <>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
                tasks={tasks}
            />
        </>
    )
}