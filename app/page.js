"use client";

import { useState } from "react";

import Header from "./components/Header";
import LanguageSelector from "./components/LanguageSelector";
import CodeEditor from "./components/CodeEditor";
import ReviewButton from "./components/ReviewButton";
import ReviewPanel from "./components/reviewPanel";

export default function Home() {
  const [language, setLanguage] =
    useState("javascript");

  const [code, setCode] = useState(
`function add(a, b) {
  return a + b;
}`
  );

  const sampleReview = `
# Code Review

## Bugs
- No major bugs found

## Best Practices
- Use descriptive variable names

## Performance
- Time Complexity: O(n)

## Suggestions

\`\`\`javascript
const add = (a, b) => a + b;
\`\`\`
`;

  return (
    <main className="h-screen bg-slate-950 text-white">
      <div className="h-full flex">

        {/* LEFT PANEL */}
        <div className="w-1/2 border-r border-slate-800 flex flex-col">

          <Header />

          <LanguageSelector
            language={language}
            setLanguage={setLanguage}
          />

          <div className="flex-1">
            <CodeEditor
              code={code}
              setCode={setCode}
              language={language}
            />
          </div>

          <div className="p-4 border-t border-slate-800">
            <ReviewButton />
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 flex flex-col">

          <div className="p-6 flex-1">

            <h2 className="text-xl font-semibold mb-4">
              Review Results
            </h2>

            <ReviewPanel
              review={sampleReview}
            />

          </div>

        </div>

      </div>
    </main>
  );
}