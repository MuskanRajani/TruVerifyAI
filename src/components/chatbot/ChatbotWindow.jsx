import { useEffect, useRef, useState } from "react";
import { getBotReply } from "./botLogic";

function getFormattedTime() {
  const now = new Date();
  return now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}

export default function ChatbotWindow({ closeChat }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    setMessages(prev => [...prev, { from: "user", text: userText }]);
    simulateTyping(getBotReply(userText));
  }

  function simulateTyping(fullText) {
    let index = 0;
    setMessages(prev => [...prev, { from: "bot", text: "" }]);

    const interval = setInterval(() => {
      index++;
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1].text = fullText.slice(0, index);
        return updated;
      });

      if (index >= fullText.length) clearInterval(interval);
    }, 18);
  }

  return (
    <div
      className="
        fixed bottom-24 right-8 z-50
        w-[340px] h-[420px]
        bg-white
        rounded-2xl
        shadow-xl
        border border-slate-200
        flex flex-col
      "
    >
      {/* Header */}
      <div className="bg-slate-900 rounded-t-2xl">
        <div className="px-4 py-3 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-primary" />
              TruVerify Support
            </div>
            <div className="text-xs text-slate-300 mt-0.5">
              Today, {getFormattedTime()}
            </div>
          </div>

          <button
            onClick={closeChat}
            className="text-slate-300 hover:text-white"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-4 space-y-3 overflow-y-auto bg-slate-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[75%] text-sm leading-relaxed px-3 py-2 rounded-lg ${
              msg.from === "bot"
                ? "bg-white text-slate-800 shadow-sm"
                : "bg-brand-primary text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-slate-200 bg-white rounded-b-2xl flex gap-2 shadow-[0_-1px_0_rgba(0,0,0,0.03)]">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message…"
          className="
            flex-1
            text-sm
            px-3 py-2
            border border-slate-300
            rounded-lg
            focus:outline-none
            focus:ring-1
            focus:ring-brand-primary
          "
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="
            px-3 py-2
            rounded-lg
            bg-brand-primary
            text-white
            hover:opacity-90
          "
          aria-label="Send message"
        >
          →
        </button>
      </div>
    </div>
  );
}
