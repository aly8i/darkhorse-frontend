import React from 'react';
import { useGetTopLosersQuery } from '../../../redux/HomeAPI';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { PAGE_IDS } from '../PageIds';
import { pageURLs } from '../../../utils/routingConstants';
import '.././style.scss';

export default function TopLosers() {
  const topLosersPageNo = 1;

  const { data: topLosers, isLoading: isTopLosersLoading, isSuccess: isTopLoserSuccess } = useGetTopLosersQuery(topLosersPageNo);

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Top Losers</h2>
      <HomePageSlider isLoading={isTopLosersLoading} isLoadingSuccess={isTopLoserSuccess} data={topLosers?.payload} pageIds={PAGE_IDS.TOP_LOSERS} pageURL={pageURLs['Top Losers']} />
    </div>
  );
}
