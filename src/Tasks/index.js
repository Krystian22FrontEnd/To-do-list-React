import "./style.css";

const Tasks = ({ tasks, hideDoneTask }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li key={task.id}
        className={`list__item ${task.done && hideDoneTask ? "tasks__item--hidden" : ""}">`}
      >
        <button className="task__button task__button--done">
          {task.done ? "✔️" : ""}
        </button>
        <span className={`task__item${task.done ? " tasks__item--done " : ""}`}>
          {task.content}
        </span>
        <button className="task__button task__button--remove">
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;