import React from 'react';
import HomePageSlider from '../../../Components/HomePageSlider/HomePageSlider';
import { PAGE_IDS } from '../PageIds';
import { pageURLs } from '../../../utils/routingConstants';
import { useGetCompaniesByTagQuery } from '../../../redux/HomeAPI';

function PennyStocks() {
  const {
    data: pennyStockCompanies,
    isLoading: isPennyStockCompaniesLoading,
    isSuccess: isPennyStockCompaniesSuccess,
  } = useGetCompaniesByTagQuery({
    id: PAGE_IDS.PNNY_STOCKS_COMPANIES,
    pageNo: 1,
  });

  return (
    <div className="mt-section">
      <h2 className="fs-75 container header-mb text-uppercase mt-section-title">Penny Stocks</h2>
      <HomePageSlider isLoading={isPennyStockCompaniesLoading} isLoadingSuccess={isPennyStockCompaniesSuccess} data={pennyStockCompanies && pennyStockCompanies.payload} pageIds={PAGE_IDS.PHARMACEUTICAL_COMPANIES} pageURL={pageURLs['Penny Stocks']} />
    </div>
  );
}

export default PennyStocks;
