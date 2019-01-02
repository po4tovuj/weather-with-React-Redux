import React from "react";
import Multiselect from "../Multiselect";

const SelectorsContainer = props => {
  return (
    <div className="col-lg-3 col-md-4 col-xs-12">
      <Multiselect
        className={"mb-3"}
        options={props.cities}
        handleChangeSelect={props.handleOnChangeCity}
      />
      <Multiselect
        options={props.metrics}
        handleChangeSelect={props.handleOnChangeMetric}
      />
    </div>
  );
};
export default SelectorsContainer;
