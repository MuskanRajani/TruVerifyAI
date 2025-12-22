export default function ChatbotButton({ openChat }) {
  return (
    <button
      onClick={openChat}
      className="
        fixed bottom-6 right-8 z-50
        flex items-center gap-3
        px-4 py-2     /* ⬅️ reduced from py-2.5 */
        rounded-2xl
        bg-white
        shadow-md
        hover:shadow-lg
        transition
      "
      aria-label="Open chat"
    >
      {/* Icon container */}
      <div
        className="
          h-10 w-10     /* ⬅️ reduced from 44px (h-11 w-11) */
          rounded-lg
          bg-orange-400/5
          flex items-center justify-center
          text-orange-500
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"   /* ⬅️ slightly smaller icon */
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-5 4V6z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
        </svg>
      </div>

      {/* Text */}
      <div className="text-left leading-tight">
        <div className="text-sm font-medium text-slate-800">
          Chat with us
        </div>
        <div className="text-xs text-slate-400">
          We’re here to help
        </div>
      </div>
    </button>
  );
}
