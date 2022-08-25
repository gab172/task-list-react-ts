import React, { useState } from "react";
import { Task } from "../interfaces/Task";

interface Props {
  addTask: (task: Task) => void;
}

const Formulario = ({ addTask }: Props) => {
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
  });

  const { title, description } = task;

  const taskValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask({ ...task, [e.target.name]: e.target.value });

  const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (title.trim() === "" || description.trim() === "") {
      alert("No puedes crear una tarea vacia");
    } else {
      task.id = Date.now();
      addTask(task);
    }
  };

  return (
    <form onSubmit={submitTask}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="title"
        onChange={taskValue}
      />
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        onChange={taskValue}
      ></textarea>
      <input type="submit" value="Crear Tarea" />
    </form>
  );
};

export default Formulario;
