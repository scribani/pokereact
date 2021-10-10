import React from "react";

export const Select = ({ children }) => (
  <select className="select__input" defaultValue={"DEFAULT"}>
    {children}
  </select>
);
