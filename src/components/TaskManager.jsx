// src/components/TaskManager.jsx
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([]);
  const { theme } = useContext(ThemeContext);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks =
    filter === "active"
      ? tasks.filter((t) => !t.completed)
      : filter === "completed"
      ? tasks.filter((t) => t.completed)
      : tasks;

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Task Manager</h2>
      
      <div className="mb-6 flex gap-3">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className={`border p-3 rounded w-full ${
            theme === "dark" 
              ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
              : "bg-white border-gray-300 text-black"
          }`}
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-6 justify-center flex-wrap">
        <Button 
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All ({tasks.length})
        </Button>
        <Button 
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active ({tasks.filter(t => !t.completed).length})
        </Button>
        <Button 
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed ({tasks.filter(t => t.completed).length})
        </Button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          {filter === "all" 
            ? "No tasks yet. Add one above!" 
            : `No ${filter} tasks.`}
        </p>
      ) : (
        <ul className="space-y-3">
          {filteredTasks.map((t) => (
            <li
              key={t.id}
              className={`flex justify-between items-center p-4 border rounded-lg transition ${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              } ${t.completed ? "opacity-60" : ""}`}
            >
              <span 
                onClick={() => toggleTask(t.id)}
                className={`cursor-pointer flex-grow flex items-center ${
                  t.completed ? "line-through text-gray-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTask(t.id)}
                  className="mr-3 cursor-pointer w-4 h-4"
                />
                {t.text}
              </span>
              <button
                onClick={() => deleteTask(t.id)}
                className="ml-4 text-red-500 hover:text-red-700 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}