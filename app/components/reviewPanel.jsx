import CategoryCard from "./CategoryCard";

export default function ReviewPanel({ review }) {
  if (!review) {
    return (
      <div
        className="
          h-full
          bg-slate-900
          border
          border-slate-600
          rounded-xl
          p-6
        "
      >
        <p className="text-slate-400">
          Paste code and click Review Code.
        </p>
      </div>
    );
  }

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
      "
    >
      {/* Score Card */}
      <div className="mb-6">
        <div className="bg-green-600 rounded-xl p-4">
          <p className="text-sm">
            Code Quality Score
          </p>

          <h2 className="text-4xl font-bold">
            {review.score}/100
          </h2>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <CategoryCard
          title="🐞 Bugs"
          items={review.bugs || []}
        />

        <CategoryCard
          title="📘 Best Practices"
          items={review.bestPractices || []}
        />

        <CategoryCard
          title="⚡ Performance"
          items={review.performance || []}
        />

        <CategoryCard
          title="🔒 Security"
          items={review.security || []}
        />

        <CategoryCard
          title="🚀 Improvements"
          items={review.improvements || []}
        />
      </div>

      {/* Fixed Code */}
      {review.fixedCode && (
        <div className="mt-6">
          <h3 className="font-semibold mb-3">
            Suggested Code
          </h3>

          <pre className="bg-slate-950 p-4 rounded-xl overflow-x-auto">
            <code>
              {review.fixedCode}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}