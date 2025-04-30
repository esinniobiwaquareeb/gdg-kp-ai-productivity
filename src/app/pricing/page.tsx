import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Student',
    id: 'student',
    price: '$9',
    description: 'Perfect for students looking to boost their productivity.',
    features: [
      'Smart Task Management',
      'Study Assistant',
      'Basic Document Automation',
      'Progress Analytics',
      'Email Support',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'professional',
    price: '$19',
    description: 'Ideal for young professionals seeking advanced productivity tools.',
    features: [
      'Everything in Student',
      'Advanced Document Automation',
      'Smart Calendar Integration',
      'Workflow Automation',
      'Priority Support',
      'Team Collaboration',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: 'Custom',
    description: 'For organizations requiring custom solutions and dedicated support.',
    features: [
      'Everything in Professional',
      'Custom AI Model Training',
      'Dedicated Account Manager',
      'API Access',
      'SLA Guarantee',
      'Custom Integrations',
    ],
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Choose the plan that best fits your needs. All plans include a 14-day free trial.
        </p>
      </section>

      {/* Pricing Tiers */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`card space-y-6 ${
              tier.featured
                ? 'ring-2 ring-primary-600 dark:ring-primary-500'
                : ''
            }`}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="text-4xl font-bold">{tier.price}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {tier.description}
              </p>
            </div>
            <ul className="space-y-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <span className="ml-3 text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={`/signup?plan=${tier.id}`}
              className={`block w-full text-center py-2 px-4 rounded-lg ${
                tier.featured
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold">Can I change plans later?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
            </p>
          </div>
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold">Is there a free trial?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, all plans include a 14-day free trial. No credit card required to start.
            </p>
          </div>
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold">What payment methods do you accept?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>
          <div className="card space-y-4">
            <h3 className="text-xl font-semibold">Do you offer student discounts?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, we offer a 50% discount for verified students. Contact our support team for details.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 