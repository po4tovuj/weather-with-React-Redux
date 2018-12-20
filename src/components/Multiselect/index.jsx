import React, { Fragment } from "react";

const Multiselect = ({ cities }) => (
  <Fragment>
    {cities.map((city, idx) => (
      <div key={idx}>{city}</div>
    ))}
  </Fragment>
);

export default Multiselect;
