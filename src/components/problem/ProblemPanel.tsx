import { MOCK_PROBLEM } from '@/lib/constants'

export default function ProblemPanel() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold dark:text-white">{MOCK_PROBLEM.title}</h1>
      
      <section>
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Description</h2>
        <p className="text-gray-600 dark:text-gray-300">{MOCK_PROBLEM.description}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Input Format</h2>
        <p className="text-gray-600 dark:text-gray-300">{MOCK_PROBLEM.inputFormat}</p>
      </section>
        
      <section>
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Constraints</h2>
        <p className="text-gray-600 dark:text-gray-300">{MOCK_PROBLEM.constraints}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Sample Input</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <code className="text-gray-800 dark:text-gray-200">{MOCK_PROBLEM.sampleInput}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Sample Output</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <code className="text-gray-800 dark:text-gray-200">{MOCK_PROBLEM.sampleOutput}</code>
        </pre>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2 dark:text-gray-200">Explanation</h2>
        <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <code className="text-gray-800 dark:text-gray-200">{MOCK_PROBLEM.sampleExplanation}</code>
        </pre>
      </section>
    </div>
  )
}