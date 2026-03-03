// HR-UPDATER: v1.0
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../components/Home';
import { IndustryOverview } from '../components/IndustryOverview';
import { Jobs } from '../components/Jobs';
import { FAQ } from '../components/FAQ';
import { Impressum } from '../components/Impressum';
import { Employers } from '../components/Employers';
import { Page } from '../types';

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.INDUSTRY:
        return <IndustryOverview />;
      case Page.JOBS:
        return <Jobs />;
      case Page.FAQ:
        return <FAQ />;
      case Page.EMPLOYERS:
        return <Employers />;
      case Page.IMPRESSUM:
        return <Impressum />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
};

export default Home;