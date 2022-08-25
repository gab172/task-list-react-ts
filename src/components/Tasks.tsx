import { Task } from "../interfaces/Task";

interface Props {
  tasks: Task[];
  deleteTask: (id?: number) => void;
}

const Tasks = ({ tasks, deleteTask }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p onClick={() => deleteTask(task.id)}>X</p>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
