import React, { useState } from "react";

export default function Alert({ text }) {
  const [warning, setWarning] = useState(true);
  return (
    <div className={warning ? "warning-alert" : "success-alert"}>
      Test Alert {text}
    </div>
  );
}
