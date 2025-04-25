'use client'
// import OutputPanel from '@/components/OutputPanel'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { useState } from 'react'

export default function CodeEditor() {
  const [code, setCode] = useState(`function solution(a, b) {\n  // Write your code here\n}`)

  return (
    <div className="h-full flex flex-col">
      <div className="p-2 bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
        <select className="px-3 py-1 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
          <option>JavaScript</option>
          <option>Python</option>
          <option>TypeScript</option>
          <option>Go</option>
          <option>PHP</option>
          <option>Swift</option>
          <option>Rust</option>
          <option>C/C++</option>
        </select>
      </div>

      <CodeMirror
        value={code}
        height="100%"
        extensions={[javascript()]}
        onChange={(value) => setCode(value)}
        theme="dark"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          bracketMatching: true,
        }}
      />
     
     
     

    </div>
  )
}