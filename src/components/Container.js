import React from "react";

export const Container = ({ prefix, children }) => {
  let className = `${prefix}__container`;

  return <div className={className}>{children}</div>;
};
