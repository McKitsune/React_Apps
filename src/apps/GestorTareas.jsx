import React, { useState, useEffect } from "react";
import { CiBookmarkCheck, CiBookmark } from "react-icons/ci";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { FaRegTrashAlt, FaCalendarAlt } from "react-icons/fa";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showDateInputs, setShowDateInputs] = useState({}); // Almacena la visibilidad del selector de fecha por tarea

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
        dueDate: "",
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleDateChange = (id, date) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, dueDate: date } : task
    );
    setTasks(updatedTasks);
    setShowDateInputs((prev) => ({ ...prev, [id]: false })); // Ocultar selector tras seleccionar
  };

  return (
    <div style={{ margin: "20px auto", width: "80%", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)", padding: "50px", borderRadius: "30px" }}>
      <h2 className="h2list">Lista de Tareas</h2>
      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Escribe una nueva tarea"
          className="task-input" // Añadir clase al input si necesitas estilos adicionales
        />
        <span onClick={addTask} className="add-task-button">
          <BsArrowDownSquareFill size={24} style={{ color: "#38bdf8" }} />
        </span>
      </div>


      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Tarea</th>
            <th style={{ textAlign: "center" }}>Fecha</th>
            <th style={{ textAlign: "center" }}>Estado</th>
            <th style={{ textAlign: "center" }}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 && (
            <tr>
              <td colSpan="4" className="no-tasks-message">
                No tienes tareas pendientes.
              </td>
            </tr>
          )}
          {tasks.map((task) => (
            <tr key={task.id}>
              <td
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleCompletion(task.id)}
              >
                {task.text}
              </td>
              <td style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span onClick={() => setShowDateInputs((prev) => ({ ...prev, [task.id]: !prev[task.id] }))} style={{ cursor: "pointer", marginRight: "5px" }}>
                  <FaCalendarAlt style={{ color: "gray" }} />
                </span>
                {showDateInputs[task.id] && (
                  <input
                    type="date"
                    onChange={(e) => handleDateChange(task.id, e.target.value)}
                    value={task.dueDate}
                  />
                )}
                {task.dueDate || "Sin fecha"}
              </td>
              <td style={{ textAlign: "center" }}>
                {task.completed ? (
                  <CiBookmarkCheck size={25} color="#32fb31" />
                ) : (
                  <CiBookmark size={25} color="red" />
                )}
              </td>
              <td style={{ textAlign: "center" }}>
                <span onClick={() => deleteTask(task.id)} style={{ cursor: "pointer" }}>
                  <FaRegTrashAlt size={18} color="#54b4d3" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
