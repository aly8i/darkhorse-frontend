import React from 'react';
import { useGetTopGainersQuery } from '../../../redux/HomeAPI';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { PAGE_IDS } from '.././PageIds';
import { pageURLs } from '../../../utils/routingConstants';
import '.././style.scss';

export default function TopGainers() {
  const topGainersPageNo = 1;
  const { data: topGainers, isLoading: isTopGainersLoading, isSuccess: isTopGainersSuccess } = useGetTopGainersQuery(topGainersPageNo);

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Top Gainers</h2>
      <HomePageSlider isLoading={isTopGainersLoading} isLoadingSuccess={isTopGainersSuccess} data={topGainers?.payload} pageIds={PAGE_IDS.TOP_GAINERS} pageURL={pageURLs['Top Gainers']} />
    </div>
  );
}
