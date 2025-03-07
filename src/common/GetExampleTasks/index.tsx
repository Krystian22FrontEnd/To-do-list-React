import { fetchExampleTasks } from "../../features/tasks/tasksSlice";
import Button from "../Button";
import { useState } from "react";
import { useAppDispatch } from "../../hooks";

const GetExampleTasks = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Button
      onClick={() => dispatch(fetchExampleTasks(), handleClick())}
      disabled={isLoading}
    >
      {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default GetExampleTasks;
