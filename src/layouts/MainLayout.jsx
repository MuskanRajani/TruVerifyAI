import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ChatbotButton, ChatbotWindow } from "../components/chatbot";

export default function MainLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Header */}

      <Outlet />

      <ChatbotButton openChat={() => setIsChatOpen(true)} />

      {isChatOpen && (
        <ChatbotWindow closeChat={() => setIsChatOpen(false)} />
      )}

      {/* Footer */}
    </>
  );
}
