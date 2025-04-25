import CodeEditor from '@/components/editor/CodeEditor'
import ProblemPanel from '@/components/problem/ProblemPanel'
// app/page.tsx



export default function Home() {
  return (
    <main className="h-screen flex flex-col md:flex-row">
      {/* Problem Panel - Left Side */}
      <div className="md:w-1/3 border-r dark:border-gray-700 overflow-auto">
        <ProblemPanel />
      </div>

      {/* Editor Section - Right Side */}
      <div className="flex-1 flex flex-col">
        <CodeEditor />
      </div>

      {/* <div className="flex-1 flex flex-col">
      <OutputPanel />
      </div> */}
     
    </main>
  )
}

  