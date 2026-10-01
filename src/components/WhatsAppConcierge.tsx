import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyData';
import { ChatMessage } from '../types';

export const WhatsAppConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasUnread, setHasUnread] = useState<boolean>(true);
  const [inputText, setInputText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'concierge',
      text: `Hello! Welcome to RoyalBLD Builders & Renovators Pretoria. Albert Zenda and our master artisan crew are currently on active construction sites in Pretoria.`,
      timestamp: 'Just now',
    },
    {
      id: 'msg-2',
      sender: 'concierge',
      text: `I can help you get an immediate ballpark estimate or connect you directly with Albert. What project are you planning for your home?`,
      timestamp: 'Just now',
      suggestedActions: [
        { label: 'Custom Kitchen Remodel', query: 'I want a quote for a kitchen renovation' },
        { label: 'Spa-Grade Bathroom', query: 'I want to renovate my bathroom en-suite' },
        { label: 'Architectural Extension', query: 'I want to extend or add a room to my house' },
        { label: 'Waterkloof / Midstream Site Visit', query: 'Can Albert visit my site in Pretoria?' },
      ],
    },
  ]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const generateReply = (userQuery: string): { reply: string; actions?: { label: string; query: string }[] } => {
    const q = userQuery.toLowerCase();

    if (q.includes('kitchen')) {
      return {
        reply: `For custom kitchen renovations in Pretoria, our turnarounds are typically 2 to 3 weeks with investments starting from R65,000 up to R300,000+ for executive Caesarstone or Quartzite waterfall islands and concealed sculleries. What suburb is your home in and roughly what size (e.g. 15m² or 30m²)?`,
        actions: [
          { label: 'Waterkloof Ridge (~25m²)', query: 'In Waterkloof Ridge, approx 25m²' },
          { label: 'Midstream Estate (~35m²)', query: 'In Midstream Estate, approx 35m²' },
          { label: 'Chat to Albert on WhatsApp', query: 'Connect with Albert on WhatsApp now' },
        ],
      };
    }

    if (q.includes('bath') || q.includes('bathroom')) {
      return {
        reply: `Our spa-grade bathroom suites take 10 to 16 working days, starting from R45,000. Albert personally inspects the dual-coat tanking waterproofing membrane and oversees large-format tiling and concealed mixers. Would you like a freestanding tub, frameless walk-in shower, or full gut remodel?`,
        actions: [
          { label: 'Master En-Suite Sanctuary', query: 'Full master en-suite remodel with freestanding tub' },
          { label: 'Connect with Albert', query: 'Connect with Albert on WhatsApp now' },
        ],
      };
    }

    if (q.includes('extend') || q.includes('addition') || q.includes('build')) {
      return {
        reply: `For architectural home additions, second storeys, and new builds, RoyalBLD is fully NHBRC compliant and works directly with registered structural engineers. Rates range between R12,500/m² and R14,500/m². Albert handles municipal approvals and daily site supervision. Shall we arrange an on-site structural survey?`,
        actions: [
          { label: 'Schedule On-Site Survey', query: 'I want an on-site survey with Albert' },
          { label: 'Chat Direct on WhatsApp', query: 'Connect with Albert on WhatsApp now' },
        ],
      };
    }

    if (q.includes('waterkloof') || q.includes('midstream') || q.includes('centurion') || q.includes('silver lakes') || q.includes('brooklyn') || q.includes('site')) {
      return {
        reply: `Yes, Albert Zenda is actively managing residential sites across Pretoria East, Midstream, and Silver Lakes every week. We can schedule an on-site structural audit and preliminary measurement at your convenience.`,
        actions: [
          { label: 'Request Albert Site Visit', query: 'Please have Albert contact me for a site visit' },
          { label: '1-Tap WhatsApp Direct', query: 'Connect with Albert on WhatsApp now' },
        ],
      };
    }

    if (q.includes('albert') || q.includes('whatsapp') || q.includes('connect') || q.includes('call') || q.includes('quote')) {
      return {
        reply: `You can tap the button below to open WhatsApp directly with Albert Zenda (+27 74 829 5759). He reviews incoming requests throughout the day between site inspections.`,
        actions: [
          { label: '👉 Open WhatsApp with Albert', query: 'Open WhatsApp with Albert' },
        ],
      };
    }

    return {
      reply: `Thank you! I have noted your details. Albert Zenda specializes in high-end Pretoria residential projects with 100% daily on-site supervision. You can tap below to chat directly with Albert on WhatsApp or request a fixed-price survey.`,
      actions: [
        { label: 'Send Scope to Albert on WhatsApp', query: 'Connect with Albert on WhatsApp now' },
        { label: 'Calculate Online Estimate', query: 'I will use the online estimator' },
      ],
    };
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    if (textToSend.includes('Open WhatsApp') || textToSend.includes('Connect with Albert')) {
      const waUrl = createWhatsAppUrl(
        `Hello Albert, I was chatting with the RoyalBLD online concierge regarding a residential renovation/building project in Pretoria. Can we discuss?`
      );
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    const newUserMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const { reply, actions } = generateReply(textToSend);
      const newBotMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'concierge',
        text: reply,
        timestamp: 'Just now',
        suggestedActions: actions,
      };
      setMessages((prev) => [...prev, newBotMsg]);
    }, 700);
  };

  const directAlbertUrl = createWhatsAppUrl(
    'Hello Albert Zenda, I would like to consult on a residential renovation in Pretoria.'
  );

  return (
    <>
      {/* Floating Speed-to-Lead Concierge Button */}
      <div className="fixed bottom-5 right-5 z-40">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Open WhatsApp Speed-to-Lead Concierge"
          >
            <div className="relative">
              <MessageCircle className="w-6 h-6" />
              {hasUnread && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-emerald-700 rounded-full animate-pulse" />
              )}
            </div>

            <div className="hidden sm:block text-left">
              <div className="text-xs font-semibold leading-none">Chat with RoyalBLD</div>
              <div className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-ping inline-block" />
                Albert Zenda Active
              </div>
            </div>
          </button>
        )}
      </div>

      {/* Concierge Modal / Dialog */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[380px] max-h-[85vh] h-[550px] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-bold font-serif-brand text-sm shadow">
                  AZ
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-stone-900 rounded-full" />
              </div>
              <div>
                <div className="text-sm font-bold font-serif-brand leading-none">RoyalBLD 24/7 Concierge</div>
                <div className="text-[11px] text-stone-400 mt-1 flex items-center gap-1">
                  <span>Albert Zenda On-Site Line</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-amber-50 px-3 py-2 border-b border-amber-200/80 text-[11px] text-amber-900 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              Albert is on active Pretoria sites today
            </span>
            <a
              href={`tel:${COMPANY_INFO.phones.primary.replace(/\s+/g, '')}`}
              className="font-mono font-semibold text-amber-800 hover:underline flex items-center gap-0.5"
            >
              <Phone className="w-2.5 h-2.5" /> Call
            </a>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-stone-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-amber-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>

                {/* Suggested Action Chips */}
                {msg.suggestedActions && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.suggestedActions.map((action) => (
                      <button
                        key={action.label}
                        type="button"
                        onClick={() => handleSendMessage(action.query)}
                        className="text-[11px] bg-white hover:bg-stone-100 text-stone-700 font-medium px-2.5 py-1 rounded-md border border-stone-300 transition-colors shadow-2xs cursor-pointer text-left"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 text-stone-400 text-xs pl-2">
                <div className="w-2 h-2 rounded-full bg-stone-400 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-stone-400 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-stone-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] ml-1">Speed-to-lead typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Direct WhatsApp Handoff Bar */}
          <div className="p-2.5 bg-stone-100 border-t border-stone-200">
            <a
              href={directAlbertUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tap to Open WhatsApp with Albert Zenda</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about pricing, suburbs, timelines..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-amber-600 focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 disabled:opacity-40 transition-colors cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
