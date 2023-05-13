import React from 'react';
import './style.scss';

export default function CustomTable() {
  return (
    <table className="table">
      <tr className="first-cell">
        <th>Company</th>
        <th> % Held</th>
        <th>Market Value (Crs.)</th>
      </tr>
      <tr>
        <td>Ultratech Cement</td>
        <td> 57.27%</td>
        <td>102000</td>
      </tr>
      <tr>
        <td>Aditya Birla Fashion</td>
        <td> 10.4%</td>
        <td>2600</td>
      </tr>
      <tr>
        <td>Aditya Birla Capital</td>
        <td> 54.18%</td>
        <td> 13098</td>
      </tr>
      <tr>
        <td>Hindalco</td>
        <td> 3.92%</td>
        <td> 3417</td>
      </tr>
      <tr className="total-cell">
        <td>Vodafone</td>
        <td></td>
        <td> 123885</td>
      </tr>
    </table>
  );
}
