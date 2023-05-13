import React from 'react';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { PAGE_IDS } from '../PageIds';
import { pageURLs } from '../../../utils/routingConstants';
import { useGetCompaniesByTagQuery } from '../../../redux/HomeAPI';

export default function ITcompanies() {
  const {
    data: ITCompanies,
    isLoading: isITCompaniesLoading,
    isSuccess: isITCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.IT_COMPANIES,
    pageNo: 1,
  });

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Information Technology</h2>
      <HomePageSlider isLoading={isITCompaniesLoading} isLoadingSuccess={isITCompaniesSuccess} data={ITCompanies && ITCompanies.payload} pageIds={PAGE_IDS.IT_COMPANIES} pageURL={pageURLs['Information Technology']} />
    </div>
  );
}
