import React from 'react';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { PAGE_IDS } from '../PageIds';
import { pageURLs } from '../../../utils/routingConstants';
import { useGetCompaniesByTagQuery } from '../../../redux/HomeAPI';

export default function ChemicalCompanies() {
  const {
    data: chemicalsCompanies,
    isLoading: isChemicalsCompaniesLoading,
    isSuccess: isChemicalsCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.CHEMICAL_COMPANIES,
    pageNo: 1,
  });

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Chemicals</h2>
      <HomePageSlider isLoading={isChemicalsCompaniesLoading} isLoadingSuccess={isChemicalsCompaniesSuccess} data={chemicalsCompanies && chemicalsCompanies.payload} pageIds={PAGE_IDS.CHEMICAL_COMPANIES} pageURL={pageURLs['Chemicals']} />
    </div>
  );
}
