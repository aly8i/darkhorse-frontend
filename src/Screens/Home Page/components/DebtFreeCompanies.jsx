import React from 'react';
import { useGetCompaniesByTagQuery } from '../../../redux/HomeAPI';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { PAGE_IDS } from '../PageIds';
import { pageURLs } from '../../../utils/routingConstants';
import '.././style.scss';

export default function DebtFreeCompanies() {
  const debtFreePageNo = 1;
  const {
    data: debtFreeCompanies,
    isLoading: isDebtFreeCompaniesLoading,
    isSuccess: isDebtFreeCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.DEBT_FREE_COMPANIES,
    pageNo: debtFreePageNo,
  });

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Debt Free Companies</h2>
      <HomePageSlider isLoading={isDebtFreeCompaniesLoading} isLoadingSuccess={isDebtFreeCompaniesSuccess} data={debtFreeCompanies?.payload} pageIds={PAGE_IDS.DEBT_FREE_COMPANIES} pageURL={pageURLs['Debt Free Companies']} />
    </div>
  );
}
