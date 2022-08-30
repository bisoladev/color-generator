import React, { useState, useEffect } from "react";

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);

  const { weight, rgb, hex } = color;
  const bcg = rgb.join(",");

  const hexValue = `#${hex}`
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
};

export default SingleColor;
