import React from 'react';
import { useGetTrendingIdeasQuery } from '../../../redux/HomeAPI';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { pageURLs } from '../../../utils/routingConstants';
import '../style.scss';

export default function TrendingIdeas() {
  const { data: trendingIdeas, isLoading: isTrendingLoading, isSuccess: isTrendingSuccess } = useGetTrendingIdeasQuery();

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Trending Ideas</h2>
      <HomePageSlider isLoading={isTrendingLoading} isLoadingSuccess={isTrendingSuccess} data={trendingIdeas && trendingIdeas?.payload} pageIds={''} pageURL={pageURLs['Trending Ideas']} />
    </div>
  );
}
