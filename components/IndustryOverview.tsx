import React from 'react';
import { INDUSTRY_TEXT_1, INDUSTRY_TEXT_2, JOB_TYPES_INFO } from '../constants';

export const IndustryOverview: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6">
            Die Energietechnik-Branche im Wandel
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ein umfassender Überblick über Technologien, Markttrends und Karrierechancen in Deutschland.
          </p>
        </div>

        <div className="prose prose-lg prose-slate mx-auto">
          {/* Image */}
          <div className="my-10 rounded-2xl overflow-hidden shadow-xl">
             <img 
                src="https://picsum.photos/seed/solarpanel/1200/600" 
                alt="Photovoltaikanlage bei Sonnenuntergang"
                className="w-full h-auto object-cover"
             />
          </div>

          <h2 className="text-2xl font-bold text-slate-900">Die Herausforderung der Jahrhundertaufgabe</h2>
          <div className="whitespace-pre-line text-slate-700 leading-relaxed mb-10">
            {INDUSTRY_TEXT_1}
          </div>

          <h2 className="text-2xl font-bold text-slate-900">Technologie-Trends: Speicher & H2</h2>
          <div className="whitespace-pre-line text-slate-700 leading-relaxed mb-10">
             {INDUSTRY_TEXT_2}
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-10 rounded-r-xl">
            <h3 className="text-xl font-bold text-emerald-800 mb-4">Berufsbilder & Gehaltsstrukturen</h3>
            <div className="whitespace-pre-line text-emerald-900/80 text-base">
              {JOB_TYPES_INFO}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};