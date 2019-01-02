import React from "react";
import Select from "react-select";
const Multiselect = ({ options, handleChangeSelect, className }) => {
  return (
    <div className={className}>
      <Select
        defaultValue={options[0]} // value={value}
        onChange={handleChangeSelect}
        options={options}
      />
    </div>
  );
};

export default Multiselect;
