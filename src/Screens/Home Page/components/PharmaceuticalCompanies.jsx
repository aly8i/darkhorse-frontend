import React from 'react';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { PAGE_IDS } from '../PageIds';
import { pageURLs } from '../../../utils/routingConstants';
import { useGetCompaniesByTagQuery } from '../../../redux/HomeAPI';

export default function PharmaceuticalCompanies() {
  const {
    data: pharmaceuticalCompanies,
    isLoading: isPharmaceuticalCompaniesLoading,
    isSuccess: isPharmaceuticalCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.PHARMACEUTICAL_COMPANIES,
    pageNo: 1,
  });

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Pharmaceuticals</h2>
      <HomePageSlider isLoading={isPharmaceuticalCompaniesLoading} isLoadingSuccess={isPharmaceuticalCompaniesSuccess} data={pharmaceuticalCompanies && pharmaceuticalCompanies.payload} pageIds={PAGE_IDS.PHARMACEUTICAL_COMPANIES} pageURL={pageURLs['Pharmaceuticals']} />
    </div>
  );
}
