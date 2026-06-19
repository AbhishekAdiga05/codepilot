export default function CategoryCard({
  title,
  items,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h3 className="font-semibold mb-3">
        {title}
      </h3>

      {items.length === 0 ? (
        <p className="text-slate-500">
          No issues found.
        </p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-sm"
            >
              • {typeof item === "string"
                  ? item
                  : item.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}