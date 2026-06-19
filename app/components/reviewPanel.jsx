import ReactMarkdown from "react-markdown";

export default function reviewPanel({
  review,
}) {
  return (
    <div
      className="
        h-full
        bg-slate-900
        border
        border-slate-600
        rounded-xl
        p-6
        overflow-y-auto
        prose
        prose-invert
        max-w-none
      "
    >
      <ReactMarkdown>
        {review}
      </ReactMarkdown>
    </div>
  );
}