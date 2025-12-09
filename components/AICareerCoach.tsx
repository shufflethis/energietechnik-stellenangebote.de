import React, { useState } from 'react';
import { Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { getCareerAdvice } from '../services/geminiService';

export const AICareerCoach: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    
    // Pass general context about the app for better grounding
    const context = "Das ist eine Jobbörse für Energietechnik (Wind, Solar, Netz, Wasserstoff).";
    const advice = await getCareerAdvice(input, context);
    
    setResponse(advice);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-100 rounded-2xl p-6 shadow-sm my-8">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-emerald-600 rounded-lg text-white mr-3">
          <Bot size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">KI-Karriere-Berater</h3>
          <p className="text-sm text-slate-600">Unsicher welcher Job passt? Fragen Sie unsere KI.</p>
        </div>
      </div>

      <form onSubmit={handleAskAI} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="z.B. Ich bin Mechatroniker und will in die Windkraft..."
          className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
        />
        <button 
          type="submit"
          disabled={loading || !input.trim()}
          className="absolute right-2 top-2 p-1.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
        </button>
      </form>

      {response && (
        <div className="mt-6 bg-white p-5 rounded-xl border border-slate-200 shadow-sm animate-fade-in">
          <div className="flex items-start">
            <Sparkles className="text-amber-500 mt-1 mr-3 flex-shrink-0" size={20} />
            <div className="prose prose-sm prose-slate max-w-none text-slate-700">
               {/* Simple markdown rendering replacement for safety */}
               {response.split('\n').map((line, i) => (
                 <p key={i} className={line.startsWith('-') || line.startsWith('*') ? 'ml-4' : 'mb-2'}>
                   {line.replace(/^[-*] /, '• ')}
                 </p>
               ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};