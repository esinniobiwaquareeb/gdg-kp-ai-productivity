"use client";
import { useState } from "react";

export default function TimeManagement() {
  const [tasks, setTasks] = useState([
    { text: "Finish reading chapter 5", due: "2025-05-01" },
    { text: "Prepare slides for meeting", due: "2025-05-02" },
  ]);
  const [input, setInput] = useState("");
  const [due, setDue] = useState("");

  function addTask() {
    if (input.trim() && due) {
      setTasks([...tasks, { text: input, due }]);
      setInput("");
      setDue("");
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Time Management</h2>
      <div className="flex gap-2">
        <input
          className="input-field"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Task description..."
        />
        <input
          className="input-field"
          type="date"
          value={due}
          onChange={e => setDue(e.target.value)}
        />
        <button className="btn-primary" onClick={addTask}>Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span>{task.text}</span>
            <span className="text-xs text-gray-500">(Due: {task.due})</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">Demo: Add tasks with deadlines to manage your time.</p>
    </div>
  );
}