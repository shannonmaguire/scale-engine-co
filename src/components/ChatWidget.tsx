import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/hooks/usePageTracking";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

/**
 * AI-powered chat widget for lead qualification and support
 * Provides instant responses and captures user intent
 */
export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm here to help you understand how CWT Studio can optimize your revenue operations. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    trackEvent('Chat Widget Toggled', {
      action: newState ? 'opened' : 'closed',
      messageCount: messages.length,
    });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    trackEvent('Chat Message Sent', {
      messageLength: input.length,
      conversationLength: messages.length + 1,
    });

    // Simulate AI response (in production, call your AI service)
    setTimeout(() => {
      const aiResponse = generateResponse(input);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "w-14 h-14 rounded-full",
            "bg-primary text-primary-foreground",
            "shadow-lg hover:shadow-xl",
            "flex items-center justify-center",
            "transition-all duration-300",
            "hover:scale-110 pulse-cta",
            "focus-visible-primary"
          )}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "w-[380px] h-[600px]",
            "bg-card border-2 border-border rounded-lg shadow-2xl",
            "flex flex-col",
            "transition-all duration-300",
            "fade-in-up"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-foreground">CWT Assistant</h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-2 h-2 bg-success rounded-full" />
                  Online now
                </p>
              </div>
            </div>
            <button
              onClick={handleToggle}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible-primary"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground",
                    "fade-in-up"
                  )}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
            {["Pricing", "Services", "Book Call"].map((action) => (
              <button
                key={action}
                onClick={() => setInput(action)}
                className="px-3 py-1 text-xs font-mono bg-muted hover:bg-muted/80 rounded-full whitespace-nowrap transition-colors"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="font-mono text-sm"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isTyping}
                size="icon"
                className="flex-shrink-0"
              >
                {isTyping ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Simple response generator (replace with AI service in production)
function generateResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("pricing") || lowerInput.includes("cost") || lowerInput.includes("price")) {
    return "Our pricing varies based on your needs:\n\n• Infrastructure Assessment: $7,500-$12,500\n• Revenue Sprint: $15,000-$25,000\n• Fractional Ops: From $5,000/month\n\nWould you like to schedule a call to discuss your specific situation?";
  }

  if (lowerInput.includes("service") || lowerInput.includes("what do you do")) {
    return "We offer three core services:\n\n1. Infrastructure Assessment - Diagnose your revenue system\n2. Revenue Sprint - 6-8 week implementation\n3. Fractional Ops - Ongoing optimization\n\nWhich area interests you most?";
  }

  if (lowerInput.includes("book") || lowerInput.includes("call") || lowerInput.includes("schedule")) {
    return "Great! I can help you book a discovery call. We typically respond within 24 hours.\n\nYou can book directly at /contact or I can have someone reach out. What works better for you?";
  }

  if (lowerInput.includes("salesforce")) {
    return "Yes! We specialize in Salesforce optimization and integration. We help with:\n\n• Technical debt assessment\n• System architecture\n• Automation implementation\n• Team training\n\nWould you like to learn more about our Salesforce services?";
  }

  return "That's a great question! For detailed information, I'd recommend:\n\n• Browsing our Services page\n• Checking out our sample assessment report\n• Scheduling a 30-minute discovery call\n\nWhat would be most helpful for you?";
}
