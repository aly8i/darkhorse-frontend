// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Button from "../../Components/Button/Button";

// export default function AuthLayout({ children }) {
//   const [border, setBorder] = useState(false);
//   const history = useHistory();
//   return (
//     <div className="container auth-container">
//       <div className="d-flex fs-95 auth-wrapper">
//         <div
//           onClick={() => {
//             setBorder(false);
//             localStorage.setItem("2", "2");
//             history.push(`/login`);
//           }}
//           className={border === true ? "border-bottom" : ""}
//         >
//           Sign in
//         </div>

//         <div style={{ margin: "0 10px" }}>/</div>
//         <div
//           onClick={() => {
//             setBorder(true);
//             localStorage.setItem("2", "200");
//             history.push(`/register`);
//           }}
//           className={border === false ? "border-bottom" : ""}
//         >
//           Sign up
//         </div>
//       </div>{" "}
//       <div className="d-flex justify-content-between btn-wrapper flex-column-mobile">
//         <Button text="Google" />
//         <Button text="Facebook" />
//         <Button text="Twitter" />
//       </div>
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{ width: "80vw" }}
//       >
//         <hr />
//         <div className="fs-30" style={{ margin: "0 10px" }}>
//           OR
//         </div>{" "}
//         <hr />
//       </div>
//       <div className="mt">{children}</div>
//     </div>
//   );
// }
