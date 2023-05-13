import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function CustomizedTables() {
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [BSE, setBSE] = useState("");
  const [TWELVEDATA, setTWELVEDATA] = useState("");
  const [CODE, setCODE] = useState("");
  const [price, setPrice] = useState("");
  const [gain, setGain] = useState("");
  const [gainRs, setGainRs] = useState("");
  const [priceSuggested, setPriceSuggested] = useState("");
  const [pe, setPe] = useState("");
  const [sector, setSector] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [tag4, setTag4] = useState("");
  const [tag5, setTag5] = useState("");
  const [category, setCategory] = useState("");
  const [heading, setHeading] = useState("");
  const [SEO, setSEO] = useState("");
  const [index, setIndex] = useState("");
  const [image, setImage] = useState("");
  const [paid, setPaid] = useState("");
  const [description, setDescription] = useState("");


  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Company</StyledTableCell>
            <StyledTableCell align="right">BSE</StyledTableCell>
            <StyledTableCell align="right">TWELVEDATA</StyledTableCell>
            <StyledTableCell align="right">G_F_CODE</StyledTableCell>
            <StyledTableCell align="right">price</StyledTableCell>
            <StyledTableCell align="right">gain %</StyledTableCell>
            <StyledTableCell align="right">gain Rs</StyledTableCell>
            <StyledTableCell align="right">price_suggested</StyledTableCell>
            <StyledTableCell align="right">pe</StyledTableCell>
            <StyledTableCell align="right">sector</StyledTableCell>
            <StyledTableCell align="right">Tag1</StyledTableCell>
            <StyledTableCell align="right">Tag2</StyledTableCell>
            <StyledTableCell align="right">Tag3</StyledTableCell>
            <StyledTableCell align="right">Tag4 </StyledTableCell>
            <StyledTableCell align="right">Tag5</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Heading</StyledTableCell>
            <StyledTableCell align="right">SEO Description</StyledTableCell>
            <StyledTableCell align="right">Relative Index</StyledTableCell>
            <StyledTableCell align="right">Image Link</StyledTableCell>
            <StyledTableCell align="right">Paid</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))} */}
          <StyledTableRow>
            <StyledTableCell scope="row">
              <input
                type="date"
                placeholder="test"
                className="admin-inputs"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </StyledTableCell>
            <StyledTableCell align="right">
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="company"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">           
              <input
                type="text"
                value={BSE}
                onChange={(e) => setBSE(e.target.value)}
                placeholder="BSE"
                className="admin-inputs"
              />
              </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={TWELVEDATA}
                onChange={(e) => setTWELVEDATA(e.target.value)}
                placeholder="TWELVEDATA"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={CODE}
                onChange={(e) => setCODE(e.target.value)}
                placeholder="CODE"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="price"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={gain}
                onChange={(e) => setGain(e.target.value)}
                placeholder="gain"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={gainRs}
                onChange={(e) => setGainRs(e.target.value)}
                placeholder="gainRs"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={priceSuggested}
                onChange={(e) => setPriceSuggested(e.target.value)}
                placeholder="test"
                className="admin-inputs"
              />
            </StyledTableCell>
            
            <StyledTableCell align="right">
             <input
                type="text"
                value={pe}
                onChange={(e) => setPe(e.target.value)}
                placeholder="pe"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                placeholder="sector"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={tag1}
                onChange={(e) => setTag1(e.target.value)}
                placeholder="tag1"
                className="admin-inputs"
              />
            </StyledTableCell>

            <StyledTableCell align="right">
             <input
                type="text"
                value={tag2}
                onChange={(e) => setTag2(e.target.value)}
                placeholder="tag2"
                className="admin-inputs"
              />
            </StyledTableCell>

            <StyledTableCell align="right">
             <input
                type="text"
                value={tag3}
                onChange={(e) => setTag3(e.target.value)}
                placeholder="tag3"
                className="admin-inputs"
              />
            </StyledTableCell>

            <StyledTableCell align="right">
             <input
                type="text"
                value={tag4}
                onChange={(e) => setTag4(e.target.value)}
                placeholder="tag4"
                className="admin-inputs"
              />
            </StyledTableCell>

            <StyledTableCell align="right">
             <input
                type="text"
                value={tag5}
                onChange={(e) => setTag5(e.target.value)}
                placeholder="tag5"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="heading"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="category"
                className="admin-inputs"
              />
            </StyledTableCell>
            <StyledTableCell align="right">
             <input
                type="text"
                value={SEO}
                onChange={(e) => setSEO(e.target.value)}
                placeholder="SEO"
                className="admin-inputs"
              />
            </StyledTableCell>            <StyledTableCell align="right">
             <input
                type="text"
                value={index}
                onChange={(e) => setIndex(e.target.value)}
                placeholder="index"
                className="admin-inputs"
              />
            </StyledTableCell>            <StyledTableCell align="right">
             <input
                type="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="image"
                className="admin-inputs"
              />
            </StyledTableCell>            <StyledTableCell align="right">
             <input
                type="text"
                value={paid}
                onChange={(e) => setPaid(e.target.value)}
                placeholder="paid"
                className="admin-inputs"
              />
            </StyledTableCell>            <StyledTableCell align="right">
             <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="description"
                className="admin-inputs"
              />
            </StyledTableCell> 
          </StyledTableRow>
        </TableBody>
  
      </Table>      
    </TableContainer>
    <div className="d-flex justify-content-end"><button className="table-btn">submit</button></div>
    </>
  );
}
