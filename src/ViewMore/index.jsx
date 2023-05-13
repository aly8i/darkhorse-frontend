import { useGetAllCompaniesByTagIdQuery, useGetTagDetailsQuery } from "../redux/HomeAPI";
import CompaniesSuggested from "../Screens/Companies_suggested/CompaniesSuggested";
import RechartsWrapper from "../Screens/Sector Page/RechartsWrapper";

export default function ViewMorePage() {
  const selectedCompanyIdForViewMore = localStorage.getItem("selectedCompanyIdForViewMore");
  const {data: sector, isSuccess: isSectorSuccess, isLoading: isSectorsLoading} = useGetTagDetailsQuery({id: selectedCompanyIdForViewMore});
  const {data: companies, isSuccess, isLoading } = useGetAllCompaniesByTagIdQuery({id: selectedCompanyIdForViewMore});

  return (
    <div>
      <div className="container">
        <h1 className="fs-95 mt-header">
          {!isSectorsLoading & isSectorSuccess && sector && sector.payload ? sector.payload.name : ''} 
        </h1>
      </div>
      <div className="hero-img-container mt-section">
        <img src={!isSectorsLoading & isSectorSuccess && sector && sector.payload && (sector.payload.image!== '' && sector.payload.image !=='Links') && 
        sector.payload.image} alt="Information Technology" className="hero-img" />
      </div>

      <div className="container">
        <div className='row gy-5 g-xl-8 mt-6'>
          <div className='col-xxl-12'>
            {/* <Chart />
            <Row></Row> */}
            <RechartsWrapper 
            selected='companies'
              // graphDates={graphDates}
              // graphIndianIndexPoints={graphIndianIndexPoints}
              // graphSuggestedStockPoints={graphSuggestedStockPoints}
              // indianIndexData={indianIndexData}
              // indianIndexSelected={indianIndexSelected}
              // suggestedStockData={suggestedStockData}
              // suggestedStockSelected={suggestedStockSelected}
              // onTooltipHover={onTooltipHover}
             />
          </div>
        </div>
      </div>

      <div className="d-flex container mt-section Overview-Information flex-column-tablet">
        <p className="fw-bold text-slide-up-animation-3">Overview</p>
        <p className="overview-content text-slide-up-animation-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <CompaniesSuggested companies={companies} isSuccess={isSuccess} isLoading={isLoading} />
    </div>
  );
}
