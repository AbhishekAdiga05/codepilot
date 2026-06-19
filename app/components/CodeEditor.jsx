import Editor from "@monaco-editor/react";

export default function CodeEditor({
  code,
  setCode,
  language,
}) {
  return (
    <Editor
      height="100%"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) =>
        setCode(value || "")
      }
      options={{
        minimap: {
          enabled: false,
        },
        fontSize: 15,
        automaticLayout: true,
        wordWrap: "on",
        scrollBeyondLastLine: false,
        padding: {
          top: 16,
        },
      }}
    />
  );
}