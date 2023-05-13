import React from 'react';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { pageURLs } from '../../../utils/routingConstants';
import { useGetSectorsQuery } from '../../../redux/HomeAPI';

export default function Sectors() {
  const { data: sectors, isLoading: isSectorsLoading, isSuccess: isSectorsSuccess } = useGetSectorsQuery();

  return (
    <div className="mt-section">
      <h6 className="fs-75 container header-mb text-uppercase mt-section-title">Sectors</h6>
      <HomePageSlider isLoading={isSectorsLoading} isLoadingSuccess={isSectorsSuccess} data={sectors && sectors?.payload} pageIds={''} type="sector" pageURL={pageURLs['Sectors']} />
    </div>
  );
}
