export const MOCK_PROBLEM = {
    title: "Sum of Two Numbers",
    description: `WGiven an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    inputFormat: " An array of integers nums and an integer target",
    outputFormat: "An array of two integers representing the indices",
    constraints: ["-10^3 ≤ a, b ≤ 10^3"],
    sampleInput: "Input: nums = [2,7,11,15], target = 9",
    sampleOutput: "Output: [0,1]",
    sampleExplanation: "Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]."
  }
  
  export const LANGUAGES = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'cpp', label: 'C++' },
    { value: 'typescript', label: 'Typescript' },
    { value: 'go', label: 'Go' },
    { value: 'swift', label: 'Swift' },
    { value: 'rust', label: 'Rust' },
    { value: 'php', label: 'PHP++' },
    // Add other languages later
  ]
  