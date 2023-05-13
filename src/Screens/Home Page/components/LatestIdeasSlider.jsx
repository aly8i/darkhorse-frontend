import React from 'react';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { pageURLs } from '../../../utils/routingConstants';
import { useGetLatestIdeasQuery } from '../../../redux/HomeAPI';

export default function LatestIdeasSlider() {
  const { data: latestIdeas, isLoading: isLatestLoading, isSuccess: isLatestSuccess } = useGetLatestIdeasQuery();

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Latest Ideas</h2>
      <HomePageSlider isLoading={isLatestLoading} isLoadingSuccess={isLatestSuccess} data={latestIdeas && latestIdeas.payload} pageIds={''} pageURL={pageURLs['Latest Ideas']} />
    </div>
  );
}
