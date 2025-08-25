import { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! 👋 I'm BuzzBot, your digital growth assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const { toast } = useToast();

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest("POST", "/api/chat", { message });
      return response.json();
    },
    onSuccess: (data) => {
      const botMessage: Message = {
        id: Date.now().toString() + '-bot',
        text: data.response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const quickOptions = [
    { text: "Tell me about your services", value: "services" },
    { text: "What are your pricing options?", value: "pricing" },
    { text: "I want to speak with someone", value: "contact" },
    { text: "Show me your portfolio", value: "portfolio" }
  ];

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    chatMutation.mutate(text);
  };

  const handleQuickOption = (option: { text: string; value: string }) => {
    handleSendMessage(option.text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-blue text-white p-4 rounded-full shadow-lg hover:bg-brand-deep-blue transition-all duration-300 transform hover:scale-110"
        data-testid="button-chatbot-toggle"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200" data-testid="chatbot-window">
          {/* Header */}
          <div className="bg-brand-blue text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center mr-3">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold" data-testid="text-chatbot-title">BuzzBot</h4>
                  <p className="text-xs text-blue-100" data-testid="text-chatbot-status">Online • Ready to help!</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 p-1"
                data-testid="button-chatbot-close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Messages */}
          <div className="p-4 h-80 overflow-y-auto" data-testid="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block max-w-xs p-3 rounded-lg text-sm ${
                  message.sender === 'user' 
                    ? 'bg-brand-blue text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`} data-testid={`message-${message.sender}-${message.id}`}>
                  {message.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="grid grid-cols-1 gap-2 mt-4">
                {quickOptions.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuickOption(option)}
                    className="bg-brand-blue text-white p-2 rounded text-sm hover:bg-brand-deep-blue transition-colors text-left"
                    data-testid={`button-quick-option-${index}`}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            )}

            {chatMutation.isPending && (
              <div className="mb-4">
                <div className="bg-gray-100 p-3 rounded-lg inline-block max-w-xs">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="border-t p-4">
            <div className="flex">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 rounded-r-none focus:ring-brand-blue"
                data-testid="input-chatbot-message"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || chatMutation.isPending}
                className="bg-brand-blue text-white rounded-l-none hover:bg-brand-deep-blue"
                data-testid="button-chatbot-send"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
