import { useReducer, useState } from "react";
import { AddTask } from "./AddTask";
import TaskList from "./TaskList";
import { tasksReducer } from "../../reducers/tasksReducer";

export const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export const TaskAppWithReducer = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  console.log("tasks", tasks);
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }
  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} tasks={tasks} />
    </>
  );
};

const getNextId = (data) => {
  const maxId = data.reduce((prev, current) => (prev && prev.id > current.id ? prev.id : current.id));

  return maxId + 1;
};
