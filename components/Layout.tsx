import React, { useState } from 'react';
import { Page, NavItem } from '../types';
import { Zap, Menu, X, Facebook, Linkedin, Instagram, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Startseite', page: Page.HOME },
  { label: 'Branche & Trends', page: Page.INDUSTRY },
  { label: 'Stellenangebote', page: Page.JOBS },
  { label: 'Für Arbeitgeber', page: Page.EMPLOYERS },
  { label: 'FAQ', page: Page.FAQ },
];

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => onNavigate(Page.HOME)}
            >
              <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-slate-800 tracking-tight leading-none">
                  Energietechnik
                </h1>
                <span className="text-sm text-emerald-600 font-medium tracking-wide">
                  STELLENANGEBOTE.DE
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.page
                      ? 'text-emerald-600 border-b-2 border-emerald-600'
                      : 'text-slate-600 hover:text-emerald-500 hover:bg-emerald-50 rounded-md'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                    currentPage === item.page
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-emerald-400 mr-2" />
                <span className="text-xl font-bold text-white">Energietechnik</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Ihr Partner für Karriere und Recruiting in der Energiewirtschaft. 
                Wir verbinden Talente mit Zukunftstechnologien.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-emerald-400 transition"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-emerald-400 transition"><Facebook size={20} /></a>
                <a href="#" className="hover:text-emerald-400 transition"><Instagram size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Für Bewerber</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate(Page.JOBS)} className="hover:text-emerald-400">Stellenbörse</button></li>
                <li><button onClick={() => onNavigate(Page.INDUSTRY)} className="hover:text-emerald-400">Karrieretipps</button></li>
                <li><button onClick={() => onNavigate(Page.FAQ)} className="hover:text-emerald-400">Gehaltsvergleich</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Für Arbeitgeber</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate(Page.EMPLOYERS)} className="hover:text-emerald-400">Stelle inserieren</button></li>
                <li><button onClick={() => onNavigate(Page.EMPLOYERS)} className="hover:text-emerald-400">Preise & Pakete</button></li>
                <li><button onClick={() => onNavigate(Page.EMPLOYERS)} className="hover:text-emerald-400">Recruiting-Service</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Rechtliches</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate(Page.IMPRESSUM)} className="hover:text-emerald-400">Impressum</button></li>
                <li><button onClick={() => onNavigate(Page.IMPRESSUM)} className="hover:text-emerald-400">Datenschutz</button></li>
                <li><button onClick={() => onNavigate(Page.IMPRESSUM)} className="hover:text-emerald-400">AGB</button></li>
                <li className="flex items-center mt-4 text-emerald-500">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:info@socialmediaventure.com">info@socialmediaventure.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} energietechnik-stellenangebote.de. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
};