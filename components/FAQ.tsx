import React from 'react';
import { FAQ_DATA } from '../constants';
import { HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <HelpCircle className="mx-auto h-12 w-12 text-emerald-500 mb-4" />
            <h1 className="text-3xl font-bold text-slate-900">Häufig gestellte Fragen</h1>
            <p className="mt-4 text-lg text-slate-600">
                Alles was Sie über den Einstieg und Aufstieg in der Energietechnik wissen müssen.
            </p>
        </div>

        <div className="space-y-6">
          {FAQ_DATA.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.question}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-emerald-900 rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-4">Noch Fragen offen?</h3>
            <p className="mb-6 text-emerald-100">Unser Support-Team hilft Ihnen gerne weiter, egal ob Sie Arbeitgeber oder Bewerber sind.</p>
            <a href="mailto:info@socialmediaventure.com" className="inline-block px-6 py-3 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors">
                Kontakt aufnehmen
            </a>
        </div>
      </div>
    </div>
  );
};