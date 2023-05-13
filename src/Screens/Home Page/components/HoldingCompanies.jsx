import React from 'react';
import { useGetCompaniesByTagQuery } from '../../../redux/HomeAPI';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { pageURLs } from '../../../utils/routingConstants';
import { PAGE_IDS } from '../PageIds';
import '.././style.scss';

export default function HoldingCompanies() {
  const {
    data: holdingCompanies,
    isLoading: isHoldingCompaniesLoading,
    isSuccess: isHoldingCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.HOLDING_COMPANIES,
    pageNo: 1,
  });

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Holding Companies</h2>
      <HomePageSlider isLoading={isHoldingCompaniesLoading} isLoadingSuccess={isHoldingCompaniesSuccess} data={holdingCompanies && holdingCompanies.payload} pageIds={PAGE_IDS.HOLDING_COMPANIES} pageURL={pageURLs['Holding Companies']} />
    </div>
  );
}
