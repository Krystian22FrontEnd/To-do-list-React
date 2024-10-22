import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {  toggleHideDone, setAllDone, selectHideDone, selectIsEveryTaskDone, selectAreTasksEmpty } from "../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty)
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
