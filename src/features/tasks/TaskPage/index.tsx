import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useAppSelector } from "../../../hooks";
import { RootState } from "../../../store";

function TasksPage() {
  const { id } = useParams<{ id: string }>();

  const task = useAppSelector((state: RootState) => getTaskById(state, Number(id)));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          task ? (
            <>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </>
          ) : null
        }
      />
    </Container>
  );
}

export default TasksPage;
