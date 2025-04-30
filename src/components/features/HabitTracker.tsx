"use client";
import { useState } from "react";

export default function HabitTracker() {
  const [habits, setHabits] = useState([
    { name: "Drink water", streak: 2, completed: false },
    { name: "Morning walk", streak: 5, completed: false },
  ]);
  const [input, setInput] = useState("");

  function addHabit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setHabits([...habits, { name: input, streak: 0, completed: false }]);
    setInput("");
  }

  function toggleHabit(idx: number) {
    setHabits((prev) =>
      prev.map((h, i) =>
        i === idx
          ? { ...h, completed: !h.completed, streak: h.completed ? h.streak : h.streak + 1 }
          : h
      )
    );
  }

  function resetHabits() {
    setHabits((prev) => prev.map((h) => ({ ...h, completed: false })));
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow w-full">
      <h2 className="text-2xl font-bold mb-4">Habit Tracker</h2>
      <form className="flex gap-2 mb-4" onSubmit={addHabit}>
        <input
          className="flex-1 rounded border px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new habit"
        />
        <button className="btn-primary" type="submit">Add</button>
      </form>
      <ul className="space-y-2 mb-4">
        {habits.map((habit, i) => (
          <li key={i} className="flex items-center gap-3 justify-between">
            <span className={habit.completed ? "line-through text-green-600" : ""}>{habit.name}</span>
            <span className="text-sm text-gray-500">Streak: {habit.streak}</span>
            <button
              className={`rounded px-2 py-1 text-xs ${habit.completed ? "bg-green-200 dark:bg-green-700" : "bg-gray-200 dark:bg-gray-700"}`}
              onClick={() => toggleHabit(i)}
              type="button"
            >
              {habit.completed ? "Completed" : "Mark Done"}
            </button>
          </li>
        ))}
      </ul>
      <button className="btn-secondary w-full" onClick={resetHabits} type="button">Reset for Tomorrow</button>
    </div>
  );
}
