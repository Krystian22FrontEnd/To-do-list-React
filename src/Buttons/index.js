import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  tasks.length > 0 && (
    <div className="button">
      <button
        className="buttons__button">
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>
      <button
        className="buttons__button" disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
    )
  );

export default Buttons;