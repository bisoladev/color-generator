import React, { useState, useEffect } from "react";

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);

  const {weight, rgb, hex} = color;
  const bcg = rgb.join(",");
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{`#${hex}`}</p>
    </article>
  );
};

export default SingleColor;
