import { Col, Row } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import NumberAnimation from "../Sector Page/NumberAnimation";

const CustomTooltip = (
  { active, payload, label },
  setDisplayNumber,
  setRightNumber
) => {
  useEffect(() => {
    if (active && payload && payload.length) {
      setDisplayNumber(payload[0].payload.left);
      setRightNumber(payload[0].payload.right ?? "0.00");
    }
  }, [payload]);
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          {payload[0].payload?.datetime
            ? `${(payload[0].payload?.datetime).split(" ")[0]}`
            : ""}
        </p>
      </div>
    );
  }

  return null;
};

const LineChartRecharts = (props) => {
  const { companyData, indexData, onTooltipHover, days } = props;
  const [displayNumber, setDisplayNumber] = useState();
  const [rightNumber, setRightNumber] = useState();
  const [data, setData] = useState([]);

  const numberOfDays = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  const parseCompanyData = () => {
    let res = [];
    if (companyData.values && companyData.values.length > 0) {
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
    if (indexData.values && indexData.values.length > 0) {
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
    // console.log("Companies: ", comp);
    // console.log("Indexes: ", ind);
    comp.forEach((el) => {
      res.push({
        left: el.close,
        datetime: el.datetime,
      });
    });

    if (ind && ind.length > 0) {
      for (let i = 0; i < Math.min(res.length, ind.length); i++) {
        if (res[i].datetime.split(" ")[0] === ind[i].datetime.split(" ")[0]) {
          res[i].right = ind[i].close;
        }
      }
    }
    setData(res);
  }, [companyData, indexData, days]);

  // console.log("data:", data);

  return (
    <div>
      <NumberAnimation
        value={!isNaN(Number(displayNumber)) ? Number(displayNumber) : 0}
        rs={true}
      />
      <Row>
        <Col span={12}></Col>
        <Col span={12}>
          {props.index ?? ""}
          <NumberAnimation
            value={!isNaN(Number(rightNumber)) ? Number(rightNumber) : 0}
            rs={true}
          />
        </Col>
      </Row>

      <ResponsiveContainer minHeight={800} style={{ backgroundColor: "red" }}>
        <LineChart
          width={500}
          height={800}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          // onMouseMove={onTooltipHover}
        >
          <XAxis dataKey="name" hide={true} />
          <YAxis hide={true} yAxisId="left" orientation="left" />
          <YAxis hide={true} yAxisId="right" orientation="right" />
          <Tooltip
            content={(e) => CustomTooltip(e, setDisplayNumber, setRightNumber)}
          />
          {/* <Tooltip content={<CustomizedTooltip />} isAnimationActive={false} /> */}
          {/* <Legend /> */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="left"
            stroke="#8884d8"
            dot={false}
            strokeWidth={2}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="right"
            stroke="#82ca9d"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartRecharts;
