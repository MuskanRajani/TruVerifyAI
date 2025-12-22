export function getBotReply(message) {
  const text = message.toLowerCase();

  // Greeting
  if (
    text.includes("hi") ||
    text.includes("hello") ||
    text.includes("hey")
  ) {
    return "Hi 👋 How can I help you today?";
  }

  // What is TruVerifyAI
  if (
    text.includes("what is truverify") ||
    text.includes("what do you do") ||
    text.includes("about")
  ) {
    return "TruVerifyAI is a background verification platform that helps companies verify identity, employment, education, criminal records, and watchlists in a secure and compliant way.";
  }

  // Products / services
  if (
    text.includes("services") ||
    text.includes("products") ||
    text.includes("offer")
  ) {
    return "We offer identity verification, employment & education checks, criminal background checks (via partners), watchlists & AML screening, and fraud risk signals.";
  }

  // Pricing
  if (
    text.includes("pricing") ||
    text.includes("cost") ||
    text.includes("price")
  ) {
    return "Our pricing depends on the checks you need and your hiring volume. You can visit the Pricing page or request a demo for a detailed quote.";
  }

  // Demo
  if (
    text.includes("demo") ||
    text.includes("request demo")
  ) {
    return "You can request a demo from our website, and our team will get in touch to understand your requirements.";
  }

  // Compliance / legality
  if (
    text.includes("compliance") ||
    text.includes("legal") ||
    text.includes("law")
  ) {
    return "TruVerifyAI is designed with compliance in mind and follows applicable data protection and fair hiring practices.";
  }

  // Watchlists / AML
  if (
    text.includes("watchlist") ||
    text.includes("aml") ||
    text.includes("pep")
  ) {
    return "We screen candidates against relevant watchlists and PEP databases to help reduce regulatory and reputational risk.";
  }

  // Contact / support
  if (
    text.includes("contact") ||
    text.includes("support") ||
    text.includes("help")
  ) {
    return "You can reach our team through the Contact page, and we’ll be happy to assist you.";
  }

  // Default fallback
  return "Thanks for your message. I can help with questions about our products, pricing, or how TruVerifyAI works. Could you please be a bit more specific?";
}
