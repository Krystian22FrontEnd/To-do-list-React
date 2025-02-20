import { FormEventHandler, useRef, useState } from "react";
import { StyledForm, Button, Input} from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../../hooks";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current!.focus();
  };

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={focusInput}>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
