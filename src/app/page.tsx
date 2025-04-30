"use client";
import Link from 'next/link';

const features = [
  {
    name: 'Task Automation',
    description: 'Automate repetitive tasks and workflows.',
    href: '/features/task-automation',
  },
  {
    name: 'Time Management',
    description: 'Organize tasks with deadlines and schedules.',
    href: '/features/time-management',
  },
  {
    name: 'Study/Work Session Tracking',
    description: 'Track focused sessions with a timer and logs.',
    href: '/features/session-tracking',
  },
  {
    name: 'AI-powered Task Prioritization',
    description: 'Get smart suggestions for what to do next.',
    href: '/features/task-prioritization',
  },
  {
    name: 'Progress Analytics',
    description: 'Visualize your productivity and progress.',
    href: '/features/progress-analytics',
  },
  {
    name: 'Habit Tracker',
    description: 'Build positive routines and track your daily habits.',
    href: '/features/habit-tracker',
  },
];
export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-block mb-2 px-5 py-2 rounded-full bg-primary-600 text-white shadow font-semibold text-base dark:bg-primary-700">
          This was created during GDG Kwara Poly 2025.
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Boost Your Productivity with AI
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Automate repetitive tasks, manage your time efficiently, and achieve more with AI-powered tools designed for students and young professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/features" className="btn-primary">
            Get Started
          </Link>
          <Link href="/features" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features as Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.name} className="card flex flex-col gap-2 hover:ring-2 ring-primary-500 transition">
            <h3 className="text-xl font-semibold">{feature.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            <span className="text-primary-600 font-semibold mt-auto">Explore &rarr;</span>
          </Link>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 bg-primary-50 dark:bg-gray-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold">Ready to Transform Your Productivity?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join thousands of students and professionals who are already boosting their productivity with AI.
        </p>
        <Link href="/features" className="btn-primary inline-flex items-center gap-2">
          Explore All Features
        </Link>
      </section>
    </div>
  )
}
