import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req) {
  try {
    const { code, language } = await req.json();

const prompt = `
You are a senior software engineer.

Analyze the following ${language} code.

Return ONLY valid JSON.

{
  "score": number,
  "bugs": [
    {
      "message": "string",
      "severity": "high | medium | low"
    }
  ],
  "bestPractices": ["string"],
  "performance": ["string"],
  "security": ["string"],
  "improvements": ["string"],
  "fixedCode": "string"
}

Code:

${code}
`;

    const res = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const text = res.text;
    const cleanedText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();
  const review = JSON.parse(cleanedText);
   return NextResponse.json(review);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        review: `# Error\n\n${error.message}`,
      },
      { status: 500 }
    );
  }
}