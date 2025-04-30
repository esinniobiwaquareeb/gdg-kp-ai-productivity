"use client";
import { useState } from "react";

function prioritize(tasks: { text: string; urgent: boolean; important: boolean }[]) {
  // Demo: Urgent & important first, then urgent, then important, then rest
  return [...tasks].sort((a, b) => {
    const aScore = (a.urgent ? 2 : 0) + (a.important ? 1 : 0);
    const bScore = (b.urgent ? 2 : 0) + (b.important ? 1 : 0);
    return bScore - aScore;
  });
}

export default function TaskPrioritization() {
  const [tasks, setTasks] = useState([
    { text: "Review notes", urgent: false, important: true },
    { text: "Reply to urgent email", urgent: true, important: true },
    { text: "Organize desk", urgent: false, important: false },
  ]);
  const [input, setInput] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [important, setImportant] = useState(false);

  function addTask() {
    if (input.trim()) {
      setTasks([...tasks, { text: input, urgent, important }]);
      setInput("");
      setUrgent(false);
      setImportant(false);
    }
  }

  const prioritized = prioritize(tasks);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">AI-powered Task Prioritization</h2>
      <div className="flex gap-2 items-center">
        <input
          className="input-field"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Task description..."
        />
        <label className="flex items-center gap-1 text-xs">
          <input type="checkbox" checked={urgent} onChange={e => setUrgent(e.target.checked)} /> Urgent
        </label>
        <label className="flex items-center gap-1 text-xs">
          <input type="checkbox" checked={important} onChange={e => setImportant(e.target.checked)} /> Important
        </label>
        <button className="btn-primary" onClick={addTask}>Add</button>
      </div>
      <ul className="space-y-2">
        {prioritized.map((task, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span>{task.text}</span>
            {task.urgent && <span className="text-xs text-red-500">Urgent</span>}
            {task.important && <span className="text-xs text-yellow-500">Important</span>}
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">Demo: Tasks are sorted by urgency and importance.</p>
    </div>
  );
}
