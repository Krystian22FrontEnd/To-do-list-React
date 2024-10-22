import { useState, useEffect } from "react";

const getInitialTask = () => {
  const localData = localStorage.getItem("tasks");
  return localData ? JSON.parse(localData) : [];
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getInitialTask());

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };
  return {
    tasks,
    setTasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};
