import React, { Fragment } from "react";
import Multiselect from "../Multiselect";

const SelectorsContainer = props => {
  console.log(props);
  return (
    <div>
      <Multiselect cities={props.cities} />
      <div>hello im container</div>
    </div>
  );
};
export default SelectorsContainer;
