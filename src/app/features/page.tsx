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

export default function FeaturesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Powerful AI Tools for Your Success
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover how our AI-powered tools can help you automate tasks, manage time efficiently, and boost your productivity.
        </p>
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

    </div>
  )
} 