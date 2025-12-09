import React, { useState } from 'react';
import { MOCK_JOBS } from '../constants';
import { JobListing } from '../types';
import { Filter, MapPin, Euro, Clock, Building } from 'lucide-react';
import { AICareerCoach } from './AICareerCoach';

export const Jobs: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredJobs = MOCK_JOBS.filter(job => 
    job.title.toLowerCase().includes(filter.toLowerCase()) ||
    job.company.toLowerCase().includes(filter.toLowerCase()) ||
    job.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters & AI */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 sticky top-24">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5 text-emerald-600" /> Filter
              </h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">Suchbegriff</label>
                <input 
                  type="text" 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Jobtitel, Firma oder Tag..."
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-emerald-600 rounded border-slate-300" />
                  <label className="ml-2 text-sm text-slate-600">Home Office möglich</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-emerald-600 rounded border-slate-300" />
                  <label className="ml-2 text-sm text-slate-600">Führungskraft</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-emerald-600 rounded border-slate-300" />
                  <label className="ml-2 text-sm text-slate-600">Teilzeit</label>
                </div>
              </div>

              <hr className="my-6 border-slate-100" />
              <AICareerCoach />
            </div>
          </div>

          {/* Right Content - Job List */}
          <div className="w-full lg:w-2/3">
             <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-900">
                    {filteredJobs.length} {filteredJobs.length === 1 ? 'Stelle' : 'Stellen'} gefunden
                </h1>
                <span className="text-sm text-slate-500">Sortiert nach: <span className="font-semibold text-slate-700 cursor-pointer">Relevanz</span></span>
             </div>

             <div className="space-y-4">
                {filteredJobs.map((job) => (
                    <div key={job.id} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group cursor-pointer">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{job.title}</h3>
                                <div className="flex items-center text-slate-600 mt-1 mb-3">
                                    <Building className="h-4 w-4 mr-1.5" />
                                    <span className="font-medium">{job.company}</span>
                                </div>
                                
                                <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-500 mb-4">
                                    <div className="flex items-center bg-slate-50 px-2 py-1 rounded">
                                        <MapPin className="h-3.5 w-3.5 mr-1.5" /> {job.location}
                                    </div>
                                    <div className="flex items-center bg-slate-50 px-2 py-1 rounded">
                                        <Clock className="h-3.5 w-3.5 mr-1.5" /> {job.type}
                                    </div>
                                    <div className="flex items-center bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                                        <Euro className="h-3.5 w-3.5 mr-1.5" /> {job.salary}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex flex-col items-end justify-between self-stretch">
                                <span className="text-xs text-slate-400 mb-4">{job.posted}</span>
                                <button className="px-6 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors w-full sm:w-auto">
                                    Bewerben
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                
                {filteredJobs.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                        <p className="text-slate-500 text-lg">Keine Jobs gefunden, die zu Ihren Filtern passen.</p>
                        <button 
                            onClick={() => setFilter('')}
                            className="mt-4 text-emerald-600 font-medium hover:underline"
                        >
                            Filter zurücksetzen
                        </button>
                    </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};