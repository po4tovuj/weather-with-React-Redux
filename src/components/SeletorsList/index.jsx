import React from "react";
import Multiselect from "../Multiselect";
import PropTypes from "prop-types";
import "./style.sass";

const metrics = [
  { label: "Celsius", value: "metric" },
  { label: "Kelvin", value: "" },
  { label: "Fahrenheit", value: "imperial" }
];
const cities = [
  { value: "London", label: "London" },
  { value: "Stockholm", label: "Stockholm" },
  { value: "Kyiv", label: "Kyiv" }
];

const SelectorsList = ({ onMetricChange, onCityChange }) => (
  <div className="selectors-list">
    <Multiselect
      className={"selectors-list__item"}
      options={cities}
      handleChangeSelect={onCityChange}
    />
    <Multiselect options={metrics} handleChangeSelect={onMetricChange} />
  </div>
);
SelectorsList.propTypes = {
  onMetricChange: PropTypes.func.isRequired,
  onCityChange: PropTypes.func.isRequired
};
export default SelectorsList;
