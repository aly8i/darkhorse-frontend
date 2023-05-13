import './style.scss';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function Filter() {
  return (
    <div className="container mt-section">
      <p className="filter-title">Filter</p>
      <div className="filter-content d-flex">
        <div className="filter-item d-flex align-items-center active">
          <div className="line-animation-4">
            <div className="line-animation-4-content line-animation-4-hover active" data-text="Date">
              <span>Date</span>
            </div>
          </div>
          <AiOutlineArrowDown fontSize={35} />
        </div>
        <div className="filter-item d-flex align-items-center">
          <div className="line-animation-4">
            <div className="line-animation-4-content line-animation-4-hover" data-text="Price">
              <span>Price</span>
            </div>
          </div>
          <AiOutlineArrowDown fontSize={35} />
        </div>
        <div className="filter-item d-flex align-items-center">
          <div className="line-animation-4">
            <div className="line-animation-4-content line-animation-4-hover" data-text="Change">
              <span>Change</span>
            </div>
          </div>
          <AiOutlineArrowDown fontSize={35} />
        </div>
      </div>
    </div>
  );
}
