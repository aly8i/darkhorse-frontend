import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FiSearch } from 'react-icons/fi';
import { debounce } from 'lodash';
import { useSearchAPIMutation } from '../../redux/SearchAPI';
import './style.scss';
import SearchResult from './SearchResult';
import SkeletonCard from '../../Components/Skeleton card/SkeletonCard';
import Button from '../../Components/Button/Button';
import { Field, Form, Formik } from 'formik';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [searchAPI, { data, isSuccess, isLoading }] = useSearchAPIMutation();

  const searchWithKey = debounce((key) => {
    searchAPI(key);
  }, 500);
  let arrayNames;
  if (data) {
    const payloadKeys = Object.keys(data?.payload);
    arrayNames = payloadKeys.filter((key) => Array.isArray(data?.payload[key])).map((key) => key);
  }

  const [selectedButton, setSelectedButton] = useState('companies');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="search-container">
      <Formik
        initialValues={{
          search: search,
        }}
      >
        {({ handleSubmit, setFieldValue, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <div className="d-flex input-wrapper">
              <div className="input-line-animation__wrapper">
                <Field
                  name="search"
                  type="text"
                  className="search-input-form input-line-animation__ip"
                  placeholder="SEARCH"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    searchWithKey(e.target.value);
                  }}
                  value={search}
                />
                <div class="input-line-animation__line"></div>
              </div>
            </div>
          </Form>
        )}
      </Formik>{' '}
      <div className="fs-55 header-mb mt-section-title mt-1 mb0-mob">
        {selectedButton === 'companies' && 'Company'}
        {selectedButton === 'sectors' && 'Sector'}
        {selectedButton === 'categories' && 'Tags'}
      </div>
      <hr className="search-hr"></hr>
      <div className="d-flex search-btn-group">
        <Button text="Company" onClick={() => handleButtonClick('companies')} />
        <Button text="Sector" onClick={() => handleButtonClick('sectors')} />
        <Button text="Tags" onClick={() => handleButtonClick('categories')} />
      </div>
      <div className="btn-group" style={{ marginTop: '0%' }}>
        <Button variant="outlined" onClick={() => {}} className="tag-button heading-button">
          Heading
        </Button>
      </div>
      {search !== '' &&
        (isLoading ? (
          <SkeletonCard />
        ) : (
          Object.keys(data?.payload ?? {}).map((key, index) => {
            if (key !== selectedButton) return null;
            const value = data.payload[key];
            return <SearchResult search={search} isSuccess={isSuccess} isLoading={isLoading} heading={key} data={value} key={key} selectedButton={selectedButton} />;
          })
        ))}
    </div>
  );
}
