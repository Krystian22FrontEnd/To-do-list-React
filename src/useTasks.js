import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem("task");
    return localData ? JSON.parse(localData) : [];
  });

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

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
    hideDone,
    setTasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    toggleHideDone,
  };
};
