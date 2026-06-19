export default function ReviewButton({
  onReview,loading
}) {
  return (
    <button
    onClick={onReview}
    disabled={loading}
      className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        active:scale-[0.98]
        transition-all
        py-3
        rounded-lg
        font-semibold
        shadow-lg
      "
    >
      {loading? "Reviewing..." : "Review Code" }
    </button>
  );
}