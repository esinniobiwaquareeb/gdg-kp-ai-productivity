"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setDark(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);
  function toggle() {
    setDark((d) => {
      document.documentElement.classList.toggle("dark", !d);
      localStorage.setItem("theme", !d ? "dark" : "light");
      return !d;
    });
  }
  return (
    <button
      className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:ring-2 ring-primary-500 transition"
      onClick={toggle}
      aria-label="Toggle theme"
      type="button"
    >
      {dark ? (
        <span role="img" aria-label="Light mode">🌞</span>
      ) : (
        <span role="img" aria-label="Dark mode">🌙</span>
      )}
    </button>
  );
}
