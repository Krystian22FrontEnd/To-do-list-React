import { Wrapper } from "./styled";
import Button from "../../../../common/Button";
import {
  toggleHideDone,
  setAllDone,
  selectHideDone,
  selectIsEveryTaskDone,
  selectAreTasksEmpty,
} from "../../tasksSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

const Buttons = () => {
  const hideDone = useAppSelector(selectHideDone);
  const isEveryTaskDone = useAppSelector(selectIsEveryTaskDone);
  const areTasksEmpty = useAppSelector(selectAreTasksEmpty);
  const dispatch = useAppDispatch();

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
