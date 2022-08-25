import { useState } from "react";
import Formulario from "./components/Formulario";
import Tasks from "./components/Tasks";
import { Task } from "./interfaces/Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => setTasks([...tasks, task]);

  const deleteTask = (id?: number) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };

  return (
    <>
      <Formulario addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
