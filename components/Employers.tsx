import React from 'react';
import { CheckCircle, Users, BarChart, Target } from 'lucide-react';

export const Employers: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero for Employers */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Finden Sie die besten Köpfe der Energiebranche</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                Vom spezialisierten Schutztechniker bis zum Projektleiter für Großanlagen. 
                Wir bieten Zugang zu über 15.000 qualifizierten Kandidaten.
            </p>
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-lg transition-colors text-lg">
                Jetzt Stelle inserieren
            </button>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-6">
                <div className="inline-block p-4 bg-emerald-100 rounded-full mb-4">
                    <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zielgenaues Targeting</h3>
                <p className="text-slate-600">Unsere Plattform ist zu 100% auf Energietechnik spezialisiert. Kein Streuverlust wie bei allgemeinen Jobbörsen.</p>
            </div>
            <div className="text-center p-6">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Aktiver Kandidatenpool</h3>
                <p className="text-slate-600">Zugriff auf unseren Lebenslauf-Pool mit Ingenieuren und Technikern, die aktiv oder passiv suchen.</p>
            </div>
            <div className="text-center p-6">
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                    <BarChart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Performance Tracking</h3>
                <p className="text-slate-600">Detaillierte Analysen zu Klicks und Bewerbungen. Optimieren Sie Ihre Anzeigen in Echtzeit.</p>
            </div>
        </div>
      </div>

      {/* Pricing Teaser */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Unsere Pakete</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Standard</h3>
                    <div className="text-4xl font-extrabold text-emerald-600 mb-6">499€ <span className="text-base font-normal text-slate-500">/ Anzeige</span></div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> 30 Tage Laufzeit</li>
                        <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> Logo im Listing</li>
                        <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> Basis Support</li>
                    </ul>
                    <button className="w-full py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-50">Auswählen</button>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-500 relative">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">BESTSELLER</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium</h3>
                    <div className="text-4xl font-extrabold text-emerald-600 mb-6">899€ <span className="text-base font-normal text-slate-500">/ Anzeige</span></div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> 60 Tage Laufzeit</li>
                        <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> Top-Platzierung auf Startseite</li>
                        <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> Social Media Push</li>
                        <li className="flex items-center text-slate-600"><CheckCircle className="h-5 w-5 text-emerald-500 mr-3" /> E-Mail an Kandidatenpool</li>
                    </ul>
                    <button className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700">Auswählen</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};