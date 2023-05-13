import { Chart as ChartJSLib, BarElement, BarController, LineElement, LineController, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useState, useEffect, useRef } from 'react';
import MyChartInfo from './MyChartInfo';
import { useGetSectorDetailsQuery, useGetSectorSuggestedCompanyQuery } from '../../redux/HomeAPI';
import './style.scss';

const ChartJS = (props) => {
  // Variables
  const { companyData, indexData, company, index, onTooltipHover, days } = props;
  const [data, setData] = useState([]);
  const barChartRef = useRef(null);

  const [companyPriceValState, setCompanyPriceValState] = useState(0);
  const [indexPriceValState, setIndexPriceValState] = useState(0);

  // Suggested companies
  const selectedSector = localStorage.getItem('sector');
  const { data: sector, isSuccess: isSectorSuccess, isLoading: isSectorsLoading } = useGetSectorDetailsQuery(selectedSector);
  const { data: companies, isSuccess, isLoading } = useGetSectorSuggestedCompanyQuery(selectedSector);

  const numberOfDays = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  const parseCompanyData = () => {
    let res = [];
    if (companyData?.values && companyData?.values?.length > 0) {
      const tmpCompanies = companyData.values;
      const dt = new Date();
      tmpCompanies.map((tmp) => {
        const date = tmp?.datetime ? new Date(tmp?.datetime) : new Date();
        const ds = numberOfDays(dt, date);
        if (ds <= days) {
          res.push(tmp);
        }
      });
    }
    return res;
  };

  const parseIndexData = () => {
    let res = [];
    if (indexData?.values && indexData?.values?.length > 0) {
      const tmpCompanies = indexData.values;
      const dt = new Date();
      tmpCompanies.forEach((tmp) => {
        const date = tmp?.datetime ? new Date(tmp?.datetime) : new Date();
        const ds = numberOfDays(dt, date);
        if (ds <= days) {
          res.push(tmp);
        }
      });
    }
    return res;
  };

  useEffect(() => {
    let res = [];
    let comp = parseCompanyData();
    let ind = parseIndexData();
    comp.forEach((el) => {
      res.push({
        left: el.close,
        datetime: el.datetime,
      });
    });

    if (ind && ind.length > 0) {
      for (let i = 0; i < Math.min(res.length, ind.length); i++) {
        if (res[i].datetime.split(' ')[0] === ind[i].datetime.split(' ')[0]) {
          res[i].right = ind[i].close;
        }
      }
    }
    setData(res);
  }, [companyData, indexData, days]);

  // Function implementation
  /// expand with color, background etc.
  // function drawTextBG(ctx, txt, font, x, y) {
  //   ctx.save();
  //   ctx.font = font;
  //   ctx.textBaseline = "top";
  //   ctx.fillStyle = "#f50";
  //   var width = ctx.measureText(txt).width;
  //   ctx.fillRect(x, y, width, parseInt(font, 10));
  //   ctx.fillStyle = "#000";
  //   ctx.fillText(txt, x, y);
  //   ctx.restore();
  // }

  function formattedSuggestedCompanyDates(companyData) {
    const cmpDates = companyData?.map((cmpData) => {
      if (cmpData && cmpData.date && cmpData.date !== 'Invalid Date') {
        let d = new Date(cmpData.date) ?? new Date();
        if (d && !isNaN(d.getTime()) && new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)) {
          let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
          let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
          let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
          return `${ye}-${mo}-${da}`;
        }
      }
    });

    return cmpDates;
  }

  function formattedSuggestedCompanyDatesNew(companyData) {
    const dates = formattedSuggestedCompanyDates(companyData);
    const formattedNewDates = dates?.map((date) => {
      const dateObj = new Date(date);
      const minusOffset = 2;
      const newDate = new Date(dateObj.setDate(dateObj.getDate() - minusOffset)).toLocaleDateString();
      const formattedNewDate = formattedSuggestedCompanyDates([{ date: newDate }]);

      return formattedNewDate[0];
    });
    return formattedNewDates;
  }

  function binarySearchDates(target, start, end) {
    if (start > end) {
      return undefined;
    }

    const middle = Math.floor((start + end) / 2);
    const targetDate = new Date(target);
    const middleDate = new Date(data[middle].datetime);

    if (middleDate.toDateString() === targetDate.toDateString()) {
      return middle;
    }

    if (middleDate > targetDate) {
      return binarySearchDates(target, middle + 1, end);
    }

    if (middleDate < targetDate) {
      return binarySearchDates(target, start, middle - 1);
    }
  }

  function getSuggestedCompanyDatesArr(barHeight) {
    const formattedSuggestedCompanyDatesValues = formattedSuggestedCompanyDatesNew(companies?.payload);
    const newDatesArr = new Array(data.length).fill(undefined);

    formattedSuggestedCompanyDatesValues?.forEach((date) => {
      const index = binarySearchDates(date, 0, data.length - 1);
      if (index) {
        newDatesArr[index] = barHeight;
      }
    });

    return newDatesArr;
  }

  function updateStockPrices(e, chart) {
    const myChart = e.chart;

    if (chart.length > 0) {
      const companyPoint = chart[0];
      const companyStockPrice = myChart.data.datasets[companyPoint.datasetIndex].data[companyPoint.index];
      const formattedCompanyStockPricePrice = parseFloat(companyStockPrice).toFixed(3);
      setCompanyPriceValState(formattedCompanyStockPricePrice);

      if (chart.length === 2) {
        const indexPoint = chart[1];
        const indexStockPrice = myChart.data.datasets[indexPoint.datasetIndex].data[indexPoint.index];
        const formattedIndexStockPrice = parseFloat(indexStockPrice).toFixed(3);
        setIndexPriceValState(formattedIndexStockPrice);
      }
    }
  }

  // Plugin implatations
  const tooltipLine = {
    id: 'tooltipLine',
    beforeDraw(chart) {
      const {
        canvas,
        ctx,
        chartArea: { top, bottom },
      } = chart;
      const defaultLineColor = 'hsla(208, 12%, 60%, 1)';
      const activePoint1LineColor = 'hsl(233, 100%, 66%)';
      const activePoint2LineColor = 'hsl(165, 100%, 41%)';

      if (chart.tooltip._active && chart.tooltip._active.length) {
        ctx.save();
        const activePoint1 = chart.tooltip._active[0];
        const activePoint2 = chart.tooltip._active[1];
        let activePointColor = 'hsla(208, 12%, 76%, 1)';
        let activePointX1 = activePoint1.element.x;
        let activePointY1 = activePoint1.element.y;
        let activePointX2 = 0;
        let activePointY2 = 0;

        if (activePoint2) {
          if (activePoint1.element.y < activePoint2.element.y) {
            activePointX1 = activePoint1.element.x;
            activePointY1 = activePoint1.element.y;

            activePointX2 = activePoint2.element.x;
            activePointY2 = activePoint2.element.y;

            activePointColor = activePoint1LineColor;
          } else {
            activePointX1 = activePoint2.element.x;
            activePointY1 = activePoint2.element.y;

            activePointX2 = activePoint1.element.x;
            activePointY2 = activePoint1.element.y;

            activePointColor = activePoint2LineColor;
          }
        }

        ctx.lineWidth = 1;
        ctx.strokeStyle = defaultLineColor;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(activePointX1, top);

        if (activePoint2) {
          ctx.lineTo(activePointX1, activePointY1);
          ctx.stroke();
          ctx.closePath();
          ctx.restore();

          ctx.lineWidth = 1.5;
          ctx.setLineDash([]);
          ctx.strokeStyle = activePointColor;
          ctx.beginPath();
          ctx.moveTo(activePointX1, activePointY1);
          ctx.lineTo(activePointX2, activePointY2);
          ctx.stroke();
          ctx.closePath();
          ctx.restore();

          ctx.lineWidth = 1;
          ctx.strokeStyle = defaultLineColor;
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.moveTo(activePointX2, activePointY2);
          ctx.lineTo(activePointX2, bottom);
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        } else {
          ctx.lineTo(activePointX1, bottom);
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        }
      }
    },
  };
  const tooltipPoint = {
    id: 'tooltipPoint',
    afterDraw(chart) {
      const { ctx } = chart;
      if (chart.tooltip._active && chart.tooltip._active.length) {
        ctx.save();
        const activePoint1LineColor = 'hsl(233, 100%, 66%)';
        const activePoint2LineColor = 'hsl(165, 100%, 41%)';

        chart.tooltip._active.forEach((activePoint, index) => {
          ctx.fillStyle = index === 0 ? activePoint1LineColor : activePoint2LineColor;
          ctx.strokeStyle = 'white';
          ctx.lineWidth = 2;
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.arc(activePoint.element.x, activePoint.element.y, 5, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        });
      }
    },
  };
  const customTooltip = {
    id: 'customTooltip',
    afterDraw(chart) {
      const {
        ctx,
        chartArea: { top, right, bottom, left },
      } = chart;
      const rootFontSize = parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));

      const oneCharNormalWidth = 8;
      const oneCharBoldWidth = 9;
      const oneSpaceWidth = 6;

      ctx.save();

      if (chart.tooltip._active && chart.tooltip._active.length) {
        const dataIndex = chart.tooltip._active[0].index ?? chart.tooltip._active[1].index ?? 0;
        const indexDate = chart.data.labels[dataIndex];
        const indexValue = chart.data.datasets[0].data[dataIndex] ?? chart.data.datasets[1].data[dataIndex];
        const formattedIndexValue = `₹ ${parseFloat(indexValue).toFixed(2)}`;
        const tooltipPriceText = `${formattedIndexValue}`;
        const tooltipDateText = `| ${indexDate}`;

        const tooltipX = chart.tooltip._active[0].element.x;
        const tooltipPadding = rootFontSize;
        const tooltipPriceMaxWidth = oneCharBoldWidth * (tooltipPriceText.length - 1);
        const tooltipDateMaxWidth = oneCharNormalWidth * (tooltipDateText.length - 2);
        const tooltipPriceStartPos = tooltipX + tooltipPadding;
        const tooltipPriceStartPos2 = tooltipX - oneSpaceWidth - tooltipPriceMaxWidth - tooltipDateMaxWidth;
        const tooltipDateStartPos = tooltipX + tooltipPriceMaxWidth + oneSpaceWidth;
        const tooltipDateStartPos2 = tooltipX - tooltipPadding - tooltipDateMaxWidth;

        if (tooltipX + tooltipPadding + tooltipPriceMaxWidth + tooltipDateMaxWidth >= right) {
          ctx.font = 'normal normal 700 .8rem/1 AvertaBold, serif';
          ctx.fillStyle = 'hsla(234, 17%, 55%, 1)';
          ctx.beginPath();
          ctx.fillText(tooltipPriceText, tooltipPriceStartPos2, tooltipPadding * 2, tooltipPriceMaxWidth);
          ctx.closePath();
          ctx.restore();

          ctx.font = 'normal normal 400 .8rem/1 Averta, serif';
          ctx.fillStyle = 'hsla(234, 11%, 75%, 1)';
          ctx.beginPath();
          ctx.fillText(tooltipDateText, tooltipDateStartPos2, tooltipPadding * 2, tooltipDateMaxWidth);
          ctx.closePath();
          ctx.restore();
        } else {
          ctx.font = 'normal normal 700 .8rem/1 AvertaBold, serif';
          ctx.fillStyle = 'hsla(234, 17%, 55%, 1)';
          ctx.beginPath();
          ctx.fillText(tooltipPriceText, tooltipPriceStartPos, tooltipPadding * 2, tooltipPriceMaxWidth);
          ctx.closePath();
          ctx.restore();

          ctx.font = 'normal normal 400 .8rem/1 Averta, serif';
          ctx.fillStyle = 'hsla(234, 11%, 75%, 1)';
          ctx.beginPath();
          ctx.fillText(tooltipDateText, tooltipDateStartPos, tooltipPadding * 2, tooltipDateMaxWidth);
          ctx.closePath();
          ctx.restore();
        }
      }
    },
  };
  ChartJSLib.register(
    // Elements, Controllers, and Scales goes here
    BarElement,
    BarController,
    LineElement,
    LineController,
    PointElement,
    CategoryScale,
    LinearScale,

    // Custom plugins goes here
    tooltipLine,
    tooltipPoint,
    customTooltip,
  );

  const dataLine = {
    labels: data?.map((dt) => dt.datetime),
    datasets: [
      {
        type: 'line',
        label: company ?? 'Company stocks',
        data: data?.map((dt) => dt.left),
        borderColor: 'hsl(233, 100%, 66%)',
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 0,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: index ?? 'Index stocks',
        data: data?.map((dt) => dt.right),
        borderColor: 'hsl(165, 100%, 41%)',
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 0,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        yAxisID: 'index',
      },
    ],
  };
  const dataBar = {
    labels: data?.map((dt) => dt.datetime),
    datasets: [
      {
        type: 'bar',
        label: 'Suggested company',
        data: getSuggestedCompanyDatesArr(10),
        backgroundColor: 'hsl(225deg 40% 70%)',
        hoverBackgroundColor: 'hsl(225deg 30% 40%)',
        barThickness: 6,
        maxBarThickness: 6,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        yAxisID: 'y',
      },
    ],
  };

  const optionsLine = {
    maintainAspectRatio: false,
    animations: false,
    responsive: true,
    onHover(e, chart) {
      updateStockPrices(e, chart);
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
      index: {
        type: 'linear',
        position: 'right',
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      clickBar: false,
    },
  };

  const optionsBar = {
    maintainAspectRatio: false,
    responsive: true,
    animations: false,
    onClick(e, chart) {
      if (chart.length > 0) {
        // const myChart = e.chart;
        // const firstPoint = chart[0];
        // const value =
        //   myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        const redirectLink = 'https://google.com';
        window.open(redirectLink, '_blank');
      }
    },
    onHover(e, chart) {
      const { canvas } = e.chart;
      canvas.style.cursor = chart.length > 0 ? 'pointer' : 'default';
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: false,
        type: 'linear',
        position: 'left',
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: 'white',
        borderColor: 'hsl(227, 80%, 90%)',
        borderWidth: 2,
        titleColor: 'hsl(227, 25%, 35%)',
        titleFont: {
          family: 'Averta',
          size: 10,
          weight: '100',
        },
        bodyColor: 'hsl(227, 30%, 30%)',
        bodyFont: {
          family: 'AvertaSemi',
          size: 12,
          lineHeight: 1.2,
        },
        padding: 10,
        caretPadding: 10,
        callbacks: {
          label: (ctx) => {
            const ctxDate = new Date(ctx.label);

            for (const value of companies?.payload) {
              const cmpDate = new Date(value.date);
              const subtractDays = 2;
              const suggestedDate = new Date(cmpDate.setDate(cmpDate.getDate() - subtractDays));
              if (ctxDate.toDateString() === suggestedDate.toDateString()) {
                return value.name;
              }
            }
          },
        },
      },
      legend: {
        display: false,
      },
      tooltipLine: false,
      updatePrice: false,
      tooltipPoint: false,
      customTooltip: false,
    },
  };

  return (
    <>
      <div className="myChart-wrapper">
        <div className="myChart-infoWrapper">
          <MyChartInfo companyLabel={company ?? 'Company stocks'} companyPrice={companyPriceValState} indexLabel={index ?? 'Index stocks'} indexPrice={indexPriceValState} />
        </div>

        <div className="myChart-lineChartWrapper">
          <Chart options={optionsLine} data={dataLine} />
        </div>

        <div className="myChart-barChartWrapper">
          <Chart options={optionsBar} data={dataBar} ref={barChartRef} />
        </div>
      </div>
    </>
  );
};

export default ChartJS;
