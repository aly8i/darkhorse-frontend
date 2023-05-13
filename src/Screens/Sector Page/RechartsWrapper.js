import React, { useState, useEffect } from 'react';
import { Row, Col, Select, Spin } from 'antd';
import Timeline from '../Timeline';
import { useGetAllCompaniesByTagIdQuery, useGetSectorSuggestedCompanyQuery, useGetTimeSeriesValueMutation } from '../../redux/HomeAPI';

import ChartJS from '../../Components/ChartJS/ChartJS';

const items = [
  { label: '1D', key: '1D', val: '1day' },
  { label: '1W', key: '1W', val: '1week' },
  { label: '1M', key: '1M', val: '1month' },
  { label: '3M', key: '3M', val: '3month' },
  { label: '1Y', key: '1Y', val: '1year' },
  { label: '5Y', key: '5Y', val: '5year' },
  { label: 'Max', key: 'max', val: '20year' },
];

const RechartsWrapper = (props) => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedIndex, setSelectedIndex] = useState('');

  const selectedSector = localStorage.getItem('sector');
  const { data: sectorCompanies, isSuccess: isSectorCompaniesSuccess, isLoading: isSectorCompaniesLoading } = useGetSectorSuggestedCompanyQuery(selectedSector);

  const selectedCompanyIdForViewMore = localStorage.getItem('selectedCompanyIdForViewMore');
  const { data: tagCompanies, isSuccess: isTagCompaniesSuccess, isLoading: isTagCompaniesLoading } = useGetAllCompaniesByTagIdQuery({ id: selectedCompanyIdForViewMore });

  const [getCompanyData, { data: companyStockData, isLoading: companyStockDataLoading, isSuccess: companyStockDataSuccess }] = useGetTimeSeriesValueMutation();
  const [getIndexData, { data: indexStockData, isLoading: indexDataLoading, isSuccess: indexDataSuccess }] = useGetTimeSeriesValueMutation();

  const [activeTimeline, setActiveTimeLine] = useState(items[0]);

  const [compData, setCompData] = useState([]);
  const [indData, setIndData] = useState([]);
  const [days, setDays] = useState(1);

  const isLoading = props.selected === 'sector' ? isSectorCompaniesLoading : isTagCompaniesLoading;
  const isSuccess = props.selected === 'sector' ? isSectorCompaniesSuccess : isTagCompaniesSuccess;
  const companies = props.selected === 'sector' ? sectorCompanies : tagCompanies;
  // const{ graphDates, graphIndianIndexPoints, graphSuggestedStockPoints, onTooltipHover } = props;
  // const [graphData, setGraphData] = useState([]);

  // const filterGraphDataWithDate = (dayDifference) => {
  //   const rechartsData = graphDates.map((gr, idx) => {
  //     return {
  //       name: gr,
  //       left: graphIndianIndexPoints[idx],
  //       right: graphSuggestedStockPoints[idx]
  //     }
  //   });
  //   const res = rechartsData.filter((gt) => {
  //     const dateDiff = differenceInDays(new Date(), new Date(gt.name));
  //     if(dateDiff <= dayDifference){
  //       return gt;
  //     }
  //   });
  //   setGraphData(res);
  //   return res;
  // }

  const numberOfDays = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  const parseCompanyData = () => {
    if (!companyStockDataLoading && companyStockDataSuccess && companyStockData && companyStockData.payload && companyStockData.payload.values.length > 0) {
      const tmpCompanies = companyStockData.payload.values;
      const dt = new Date();
      const res = tmpCompanies.map((tmp) => {
        const date = new Date(tmp.datetime);
        const ds = numberOfDays(dt, date);
        if (ds <= days) {
          return tmp;
        }
      });
      setCompData(res);
    }
  };

  const parseIndexData = () => {
    if (!indexDataLoading && indexDataSuccess && indexStockData && indexStockData.payload && indexStockData.payload.values.length > 0) {
      const tmpCompanies = indexStockData.payload.values;
      const dt = new Date();
      const res = tmpCompanies.map((tmp) => {
        const date = new Date(tmp.datetime);
        const ds = numberOfDays(dt, date);
        if (ds <= days) {
          return tmp;
        }
      });
      setIndData(res);
    }
  };

  const onTimelineChange = (key) => {
    const found = items.find((it) => it.key === key);
    if (!found) return;
    setActiveTimeLine(found);
    if (selectedCompany === '') {
      return;
    }
    if (selectedIndex === '') {
      return;
    }
    let newDay = 2;
    switch (key) {
      case '1D':
        newDay = 2;
        break;
      case '1W':
        newDay = 7;
        break;
      case '1M':
        newDay = 31;
        break;
      case '3M':
        newDay = 91;
        break;
      case '1Y':
        newDay = 365;
        break;
      case '5Y':
        newDay = 365 * 5;
        break;

      default:
        newDay = 365 * 20;
        break;
    }
    // parseCompanyData();
    setDays(newDay);
    getCompanyData({
      symbol: selectedCompany,
      interval: newDay > 2 ? '1day' : '1h',
    });
    getIndexData({
      symbol: 'NSEI',
      interval: newDay > 2 ? '1day' : '1h',
    });
  };

  // useEffect(() => {
  //   onTimelineChange(activeTimeline.key);
  // }, [ graphDates, graphIndianIndexPoints, graphSuggestedStockPoints ]);

  useEffect(() => {
    if (!isLoading && isSuccess && companies && companies?.payload && companies?.payload.length > 0) {
      const [ind, com] = [companies?.payload[0].bse, companies?.payload[0].code];
      getCompanyData({
        symbol: com,
        interval: days > 2 ? '1day' : '1h',
      });
      getIndexData({
        symbol: 'NSEI',
        interval: days > 2 ? '1day' : '1h',
      });
      setSelectedCompany(com);
      setSelectedIndex(ind);
    }
  }, [isLoading, isSuccess, companies, companies?.payload]);

  return (
    <div>
      <Row>
        <Col span={8}>
          <Select
            style={{ width: '300px' }}
            placeholder="Select Company"
            defaultValue={selectedCompany}
            onChange={async (val) => {
              const [com, ind] = val.split('+');
              await getCompanyData({
                symbol: com,
                interval: days > 2 ? '1day' : '1h',
              });
              getIndexData({
                symbol: 'NSEI',
                interval: days > 2 ? '1day' : '1h',
              });
              setSelectedCompany(com);
              setSelectedIndex(ind);
            }}
          >
            {!isLoading &&
              isSuccess &&
              companies.payload &&
              companies.payload.length > 0 &&
              companies.payload.map((cp) => {
                if (cp) {
                  return <Select.Option value={cp.code + '+' + cp.bse}>{cp.name}</Select.Option>;
                }
              })}
          </Select>
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>

      {(companyStockDataLoading || indexDataLoading) && <Spin />}

      {/* {!companyStockDataLoading &&
        companyStockDataSuccess &&
        companyStockData &&
        !indexDataLoading &&
        indexDataSuccess &&
        indexStockData && (
          <LineChartRecharts
            companyData={companyStockData.payload}
            indexData={indexStockData.payload}
            onTooltipHover={() => {}}
            index={selectedIndex}
            days={days}
          />
        )} */}

      <ChartJS companyData={companyStockData?.payload} indexData={indexStockData?.payload} onTooltipHover={() => {}} company={selectedCompany} index={selectedIndex} days={days} />

      <Timeline items={items} onChange={onTimelineChange} />
    </div>
  );
};

export default RechartsWrapper;
