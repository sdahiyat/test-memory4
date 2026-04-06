import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Mindful Journal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track your thoughts and emotions with intelligent insights. 
            A modern journaling platform that helps you understand your mental wellness journey.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              href="/dashboard"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Start Journaling
            </Link>
            <Link 
              href="/mood"
              className="inline-block border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Track Your Mood
            </Link>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">✍️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Daily Journaling</h3>
              <p className="text-gray-600">Capture your thoughts and experiences with our intuitive editor.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">😊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mood Tracking</h3>
              <p className="text-gray-600">Monitor your emotional patterns and discover what affects your wellbeing.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Insights</h3>
              <p className="text-gray-600">Get personalized reflections and insights powered by artificial intelligence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
