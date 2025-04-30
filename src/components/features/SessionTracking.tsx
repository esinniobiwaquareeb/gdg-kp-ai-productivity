"use client";
import { useState } from "react";

export default function SessionTracking() {
  const [sessions, setSessions] = useState<{ duration: number; date: string }[]>([]);
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  function startSession() {
    setActive(true);
    setTimer(0);
    const id = setInterval(() => setTimer(t => t + 1), 1000);
    setIntervalId(id);
  }
  function stopSession() {
    setActive(false);
    if (intervalId) clearInterval(intervalId);
    setSessions([...sessions, { duration: timer, date: new Date().toLocaleString() }]);
    setTimer(0);
    setIntervalId(null);
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Study/Work Session Tracking</h2>
      <div className="flex gap-2 items-center">
        <button className="btn-primary" onClick={active ? stopSession : startSession}>
          {active ? "Stop Session" : "Start Session"}
        </button>
        <span className="text-lg font-mono">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</span>
      </div>
      <ul className="space-y-2">
        {sessions.map((s: { duration: number; date: string }, idx: number) => (
          <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">
            Session {idx + 1}: {Math.floor(s.duration / 60)}:{(s.duration % 60).toString().padStart(2, '0')} ({s.date})
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-500">Demo: Track your focused sessions with a timer.</p>
    </div>
  );
}
