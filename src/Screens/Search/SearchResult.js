import React, { useState } from 'react';
import SkeletonCard from '../../Components/Skeleton card/SkeletonCard';
import SecImage from '../../Assets/image section.png';
import Plus from '../../Assets/Vector.png';
import { useHistory } from 'react-router-dom';
import HorizontalCard from '../../Components/Card/HorizontalCard';

function SearchResult(props) {
  const { isLoading, isSuccess, data, heading, selectedButton, search } = props;
  const history = useHistory();

  const onSectorSelect = (id) => {
    localStorage.setItem('sector', id);
    history.push('/sector-page');
  };

  const onClickHandler = (type, id, title) => {
    if (type === 'sectors') {
      onSectorSelect(id);
      document.title = title;
    } else if (type === 'companies') {
      history.push(`/company/${id}`);
      document.title = title;
    } else history.push(`/tags/${id}`);
    // Tags page doesn't exist yet. Change this when tags page is created
  };

  const [lim, setLim] = useState(10);

  return (
    <div className="mt-section search-result">
      {isLoading && !isSuccess ? (
        <SkeletonCard />
      ) : (
        data?.map((item, idx) => item && idx < lim && <HorizontalCard search={search} imageUrl={item.image || SecImage} heading={item.name} tags={item.seo_descriptions} subHeading={item.heading} sectors={item.sectorId} onClick={() => onClickHandler(selectedButton, item.Id, item.name)} />)
      )}
      {data && data.length > lim && (
        <div className="view-more" onClick={() => setLim(lim + 20)}>
          <div>
            <img src={Plus} alt="" />
          </div>
          <p className="fw-bold" data-cursor-text="View More">
            View More
          </p>
        </div>
      )}
    </div>
  );
}

export default SearchResult;
