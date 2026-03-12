import React from 'react';
import { Page } from '../types';
import { HERO_TITLE, HERO_SUBTITLE, MOCK_JOBS, FAQ_DATA } from '../constants';
import { ArrowRight, Search, MapPin, Briefcase, HelpCircle, TrendingUp, GraduationCap, Shield } from 'lucide-react';
import { AICareerCoach } from './AICareerCoach';
import { GermanCities } from './geo/GermanCities';

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

      {/* Mobile: Quick Job List - visible on small screens for prominence */}
      <div className="md:hidden bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Neueste Stellenangebote</h2>
          <div className="space-y-3">
            {MOCK_JOBS.slice(0, 5).map((job) => (
              <div key={job.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900 truncate">{job.title}</h3>
                  <div className="flex items-center text-xs text-slate-500 mt-0.5">
                    <MapPin className="h-3 w-3 mr-1 flex-shrink-0" /> {job.location}
                  </div>
                </div>
                <button className="ml-3 px-3 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-lg flex-shrink-0">
                  Details
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate(Page.JOBS)}
            className="w-full mt-4 py-3 bg-emerald-600 text-white font-semibold rounded-lg"
          >
            Alle Stellen anzeigen
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

      {/* German Cities Geo SEO Section */}
      <GermanCities />

      {/* Career Info Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Karriere in der Energietechnik</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Die Energiebranche bietet sichere Arbeitsplaetze mit Zukunft. Hier finden Sie wichtige Informationen fuer Ihren Karriereweg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Gehalt & Perspektiven</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Ingenieure der Energietechnik verdienen zwischen 55.000 und 95.000 Euro jaehrlich. Projektleiter erreichen bis zu 110.000 Euro. Die Branche waechst durch die Energiewende stetig.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>Ingenieur: 55.000 - 95.000 Euro/Jahr</li>
                <li>Techniker/Meister: 45.000 - 70.000 Euro/Jahr</li>
                <li>Projektleiter: 70.000 - 110.000 Euro/Jahr</li>
                <li>IT-Spezialist Energie: 60.000 - 100.000 Euro/Jahr</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <GraduationCap className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Einstieg & Weiterbildung</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Der klassische Weg fuehrt ueber ein Studium der Elektro- oder Energietechnik. Doch auch Quereinsteiger haben Chancen, besonders in Projektmanagement, PV-Vertrieb und IT.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>Studium: Elektrotechnik, Energietechnik</li>
                <li>Techniker: Staatlich geprueft, Industriemeister</li>
                <li>Quereinstieg: Projektmanagement, Vertrieb, IT</li>
                <li>Weiterbildung: HGUe, SCADA, Cyber Security</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zukunftssicherheit</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                Die Energietechnik ist eine der krisensichersten Branchen. Der Ausstieg aus Kohle und Atom, Elektromobilitaet und Waermepumpen treiben den Bedarf an Fachkraeften langfristig.
              </p>
              <ul className="text-sm text-slate-500 space-y-1">
                <li>Netzausbau: SuedLink, SuedOstLink</li>
                <li>Speichertechnik: Batteriespeicher, Power-to-X</li>
                <li>Smart Grids & Digitalisierung</li>
                <li>Gruener Wasserstoff & Elektrolyse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="mx-auto h-10 w-10 text-emerald-500 mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Haeufig gestellte Fragen</h2>
            <p className="text-lg text-slate-600">
              Alles was Sie ueber den Einstieg und Aufstieg in der Energietechnik wissen muessen.
            </p>
          </div>

          <div className="space-y-6">
            {FAQ_DATA.map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.question}</h3>
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};