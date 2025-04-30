"use client";
import { useState } from "react";

export default function TaskAutomation() {
  const [tasks, setTasks] = useState([
    { text: "Submit assignment", automated: false },
    { text: "Send weekly report", automated: true },
  ]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim()) {
      setTasks([...tasks, { text: input, automated: false }]);
      setInput("");
    }
  }

  function toggleAutomation(idx: number) {
    setTasks(tasks.map((t, i) => i === idx ? { ...t, automated: !t.automated } : t));
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Task Automation</h2>
      <div className="flex gap-2">
        <input
          className="input-field"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a task to automate..."
        />
        <button className="btn-primary" onClick={addTask}>Add Task</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span>{task.text}</span>
            <button
              className={`btn-secondary text-xs px-2 py-1 ${task.automated ? 'bg-primary-100' : ''}`}
              onClick={() => toggleAutomation(idx)}
            >
              {task.automated ? "Automated" : "Manual"}
            </button>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">Demo: Toggle automation to simulate rules.</p>
    </div>
  );
}