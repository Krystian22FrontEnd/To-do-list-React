import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="button">
      {tasks.length > 0 && (
        <>
      <button 
         onClick={toggleHideDone} className="buttons__button">
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"} 
      </button>
      <button
        className="buttons__button" disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
      >
        Ukończ wszystkie
      </button>
      </>
      )}
    </div>
  );

export default Buttons;