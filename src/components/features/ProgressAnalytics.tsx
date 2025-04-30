"use client";
import { useState } from "react";

export default function ProgressAnalytics() {
  const [completed, setCompleted] = useState([
    { text: "Read 10 pages", date: "2025-04-29" },
    { text: "Finish project milestone", date: "2025-04-28" },
  ]);
  const [input, setInput] = useState("");

  function addCompleted() {
    if (input.trim()) {
      setCompleted([{ text: input, date: new Date().toISOString().slice(0, 10) }, ...completed]);
      setInput("");
    }
  }

  // Demo: Simple stats
  const total = completed.length;
  const last7 = completed.filter(c => {
    const d = new Date(c.date);
    return (new Date().getTime() - d.getTime()) / (1000*60*60*24) < 7;
  }).length;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Progress Analytics</h2>
      <div className="flex gap-2">
        <input
          className="input-field"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Completed task..."
        />
        <button className="btn-primary" onClick={addCompleted}>Add</button>
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300">
        <div>Total completed: <b>{total}</b></div>
        <div>Last 7 days: <b>{last7}</b></div>
      </div>
      <ul className="space-y-2">
        {completed.map((c, idx) => (
          <li key={idx} className="flex items-center gap-2 text-xs">
            <span>{c.text}</span>
            <span className="text-gray-400">({c.date})</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">Demo: Simple analytics for completed tasks.</p>
    </div>
  );
}
