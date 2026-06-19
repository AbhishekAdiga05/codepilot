"use client";

import { use, useState } from "react";

import Header from "./components/Header";
import LanguageSelector from "./components/LanguageSelector";
import CodeEditor from "./components/CodeEditor";
import ReviewButton from "./components/ReviewButton";
import ReviewPanel from "./components/reviewPanel";

const fakeReview = {
  score: 92,
  bugs: [
    {
      message: "Potential type coercion issue",
      severity: "medium",
    },
  ],
  bestPractices: [
    "Add JSDoc comments",
  ],
  performance: [],
  security: [],
  improvements: [
    "Validate input types",
  ],
  fixedCode: `function add(a, b) {
  if(typeof a !== "number" || typeof b !== "number"){
    throw new Error("Invalid input");
  }

  return a + b;
}`,
};






export default function Home() {
  const [language, setLanguage] =
    useState("javascript");

  const [code, setCode] = useState(
`function add(a, b) {
  return a + b;
}`
  );


  const [review,setReview]=useState(null);
  const [loading,setLoading]=useState(false);




 async function handleReview(){
  setLoading(true)
  try {
    const res=await fetch("/api/review",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        code,
        language
      })
    })
    if(!res.ok){
      throw Error("Failed to get review!")
    }

    const data=await res.json();  
    setReview(data);

  } catch (error) {
    console.log(error)
    setReview("Error:"+ error.message)
  }finally{
    setLoading(false);
  }
 }

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
            <ReviewButton onReview={handleReview} loading={loading}/>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 flex flex-col">

          <div className="p-6 flex-1">

            <h2 className="text-xl font-semibold mb-4">
              Review Results
            </h2>

            <ReviewPanel
              review={review}
            />

          </div>

        </div>

      </div>
    </main>
  );
}