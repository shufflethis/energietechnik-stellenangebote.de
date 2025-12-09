import React from 'react';
import { Page } from '../types';
import { HERO_TITLE, HERO_SUBTITLE, MOCK_JOBS } from '../constants';
import { ArrowRight, Search, MapPin, Briefcase } from 'lucide-react';
import { AICareerCoach } from './AICareerCoach';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://picsum.photos/seed/energy_tech/1920/1080" 
            alt="Wind turbine abstract" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3 lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold text-sm mb-6 tracking-wide uppercase">
              #1 Jobbörse für Energietechnik
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {HERO_TITLE}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {HERO_SUBTITLE}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate(Page.JOBS)}
                className="inline-flex justify-center items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-900/20"
              >
                Stellen finden
                <Search className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => onNavigate(Page.EMPLOYERS)}
                className="inline-flex justify-center items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold rounded-lg transition-all"
              >
                Für Arbeitgeber
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Offene Stellen', val: '2.500+' },
              { label: 'Unternehmen', val: '450+' },
              { label: 'Aktive Bewerber', val: '15k+' },
              { label: 'Erfolgsquote', val: '98%' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.val}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Jobs Teaser */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Aktuelle Top-Jobs</h2>
            <p className="text-slate-600">Die neuesten Positionen führender Energieunternehmen.</p>
          </div>
          <button 
            onClick={() => onNavigate(Page.JOBS)}
            className="hidden md:flex items-center text-emerald-600 font-semibold hover:text-emerald-700"
          >
            Alle Jobs ansehen <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_JOBS.slice(0, 3).map((job) => (
            <div key={job.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-emerald-50 transition-colors">
                  <Briefcase className="h-6 w-6 text-slate-400 group-hover:text-emerald-600" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                  {job.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{job.title}</h3>
              <p className="text-slate-600 text-sm mb-4 font-medium">{job.company}</p>
              
              <div className="flex items-center text-sm text-slate-500 mb-6">
                <MapPin className="h-4 w-4 mr-1" /> {job.location}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags.slice(0, 2).map(tag => (
                   <span key={tag} className="text-xs px-2 py-1 bg-slate-50 text-slate-600 border border-slate-100 rounded">
                     {tag}
                   </span>
                ))}
              </div>

              <button className="w-full py-2.5 text-center text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors">
                Details ansehen
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
            <button 
                onClick={() => onNavigate(Page.JOBS)}
                className="w-full py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg"
            >
                Alle Jobs ansehen
            </button>
        </div>
      </div>

      {/* AI Assistant Section */}
      <div className="bg-slate-50 py-20 border-y border-slate-200">
         <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ihre Karriere im Fokus</h2>
                <p className="text-lg text-slate-600">
                    Nutzen Sie unsere generative KI, um genau die Position zu finden, die zu Ihren Fähigkeiten passt. 
                    Kein endloses Suchen mehr.
                </p>
            </div>
            <AICareerCoach />
         </div>
      </div>
    </div>
  );
};