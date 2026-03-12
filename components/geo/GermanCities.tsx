import React from 'react';
import { MapPin } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 'Hauptstadt mit starkem Energiesektor, Sitz vieler Startups und Forschungsinstitute fuer erneuerbare Energien.' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 'Windenergie-Hochburg im Norden, mit Offshore-Windparkbetreibern und Netzausbau-Projekten.' },
  { name: 'München', region: 'Bayern', jobs: 'Technologiestandort mit Schwerpunkt auf Energieeffizienz, Smart Grid und Solartechnik.' },
  { name: 'Köln', region: 'Nordrhein-Westfalen', jobs: 'Energiewirtschaftliches Zentrum am Rhein, Sitz grosser Energieversorger wie RheinEnergie.' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 'Finanzmetropole mit wachsendem Bedarf an Energieberatern und Nachhaltigkeitsexperten.' },
  { name: 'Stuttgart', region: 'Baden-Württemberg', jobs: 'Ingenieurstandort mit Fokus auf Elektromobilitaet und dezentrale Energieerzeugung.' },
  { name: 'Düsseldorf', region: 'Nordrhein-Westfalen', jobs: 'Standort fuer Energiehandel, Netzplanung und innovative Speichertechnologien.' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 'Sitz der Europaeischen Energieboerse EEX, Zentrum fuer Energiehandel und -forschung.' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 'Messestadt und Knotenpunkt fuer Windenergie und Netzausbau in Norddeutschland.' },
  { name: 'Nürnberg', region: 'Bayern', jobs: 'Industriestandort mit Bedarf an Energietechnikern fuer Automatisierung und Leittechnik.' },
  { name: 'Bremen', region: 'Bremen', jobs: 'Windenergie und maritime Energietechnik, starke Zulieferindustrie.' },
  { name: 'Dresden', region: 'Sachsen', jobs: 'Forschungsstandort fuer Halbleiter und Energietechnik, starke Verbindung zur Mikroelektronik.' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 'Sitz von E.ON und RWE, Zentrum der deutschen Energiewirtschaft.' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 'Strukturwandel-Region mit wachsendem Fokus auf erneuerbare Energien und Wasserstoff.' },
  { name: 'Karlsruhe', region: 'Baden-Württemberg', jobs: 'KIT-Standort mit exzellenter Energieforschung und Naehe zu Frankreich.' },
  { name: 'Kassel', region: 'Hessen', jobs: 'Kompetenzzentrum fuer dezentrale Energieversorgung und Windkraftanlagen.' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 'Offshore-Windenergie-Standort an der Ostseekueste.' },
  { name: 'Freiburg', region: 'Baden-Württemberg', jobs: 'Solarstadt Deutschlands mit Fraunhofer ISE und starker Oekostrom-Branche.' },
  { name: 'Aachen', region: 'Nordrhein-Westfalen', jobs: 'RWTH-Standort mit Spitzenforschung in Energietechnik und Elektrotechnik.' },
  { name: 'Oldenburg', region: 'Niedersachsen', jobs: 'Zentrum der Windenergieforschung mit DLR und ForWind-Institut.' },
];

export const GermanCities: React.FC = () => {
  return (
    <section className="bg-white py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Energietechnik-Jobs in ganz Deutschland
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Finden Sie Stellenangebote in der Energietechnik in allen grossen deutschen Staedten.
            Von Offshore-Windenergie an der Kueste bis zu Solartechnik im Sueden.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GERMAN_CITIES.map((city) => (
            <div
              key={city.name}
              className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                <h3 className="font-semibold text-slate-900">{city.name}</h3>
              </div>
              <p className="text-xs text-emerald-600 font-medium mb-1">{city.region}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{city.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GermanCities;
