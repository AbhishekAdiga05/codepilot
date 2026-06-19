const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "TypeScript", value: "typescript" },
  { label: "Java", value: "java" },
  { label: "Python", value: "python" },
  { label: "C++", value: "cpp" },
  { label: "C", value: "c" },
];

export default function LanguageSelector({
  language,
  setLanguage,
}) {
  return (
    <div className="p-4 border-b border-slate-800 flex justify-between items-center">
      <h2 className="text-slate-100 font-medium text-lg">
        Code Editor
      </h2>

      <select
        value={language}
        onChange={(e) =>
          setLanguage(e.target.value)
        }
        className="
          bg-slate-900
          border
          border-slate-700
          px-4
          py-2
          rounded-lg
          text-sm
          focus:outline-none
          focus:ring-2
          focus:ring-blue-300
        "
      >
        {languages.map((lang) => (
          <option
            key={lang.value}
            value={lang.value}
          >
            {lang.label}
          </option>
        ))}
      </select> 
    </div>
  );
}