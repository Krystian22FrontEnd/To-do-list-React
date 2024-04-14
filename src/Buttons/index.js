import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) => (
  tasks.length > 0 && (
    <div className="button">
      <button
        className="section__button">
        {hideDoneTask ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>
      <button
        className="section__button" disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
    )
  );

export default Buttons;