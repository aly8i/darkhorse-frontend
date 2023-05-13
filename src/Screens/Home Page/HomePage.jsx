import React, { lazy, Suspense } from 'react';
import './style.scss';

const LatestIdeaLazy = lazy(() => import('./components/LatestIdea'));
const TopGainersLazy = lazy(() => import('./components/TopGainers'));
const TopLosersLazy = lazy(() => import('./components/TopLosers'));
const TrendingIdeasLazy = lazy(() => import('./components/TrendingIdeas'));
const DebtFreeCompaniesLazy = lazy(() => import('./components/DebtFreeCompanies'));
const HoldingCompaniesLazy = lazy(() => import('./components/HoldingCompanies'));
const ITcompaniesLazy = lazy(() => import('./components/ITcompanies'));
const PharmaceuticalCompaniesLazy = lazy(() => import('./components/PharmaceuticalCompanies'));
const PennyStocksLazy = lazy(() => import('./components/PennyStocks'));
const ChemicalCompaniesLazy = lazy(() => import('./components/ChemicalCompanies'));
const SectorsLazy = lazy(() => import('./components/Sectors'));
const LatestIdeasSliderLazy = lazy(() => import('./components/LatestIdeasSlider'));

export default function HomePage() {
  return (
    <div>
      <div className="home-container">
        <h1 className="container fs-95 mt-header text-slide-up-animation-1">Latest Darkhorsestock Idea</h1>
      </div>

      <Suspense>
        <LatestIdeaLazy />
      </Suspense>

      <Suspense>
        <TopGainersLazy />
      </Suspense>

      <Suspense>
        <TopLosersLazy />
      </Suspense>

      <Suspense>
        <DebtFreeCompaniesLazy />
      </Suspense>

      <Suspense>
        <LatestIdeasSliderLazy />
      </Suspense>

      <Suspense>
        <TrendingIdeasLazy />
      </Suspense>

      <Suspense>
        <HoldingCompaniesLazy />
      </Suspense>

      <Suspense>
        <ITcompaniesLazy />
      </Suspense>

      <Suspense>
        <PharmaceuticalCompaniesLazy />
      </Suspense>

      <Suspense>
        <PennyStocksLazy />
      </Suspense>

      <Suspense>
        <ChemicalCompaniesLazy />
      </Suspense>

      <Suspense>
        <SectorsLazy />
      </Suspense>
    </div>
  );
}
