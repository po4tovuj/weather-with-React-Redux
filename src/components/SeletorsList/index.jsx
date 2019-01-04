import React from "react";
import Multiselect from "../Multiselect";
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
const SelectorsList = ({ onMetricChange, onCityChange }) => {
  return (
    <div className="selectors-list">
      <Multiselect
        className={"selectors-list__item"}
        options={cities}
        handleChangeSelect={onCityChange}
      />
      <Multiselect options={metrics} handleChangeSelect={onMetricChange} />
    </div>
  );
};
export default SelectorsList;
