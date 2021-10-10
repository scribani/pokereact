import React from "react";

export const Card = ({ type, children }) => {
  console.log(type);
  return (
    <article
      className="card"
      style={{
        "--main-type": `var(--bg-${type})`,
      }}
    >
      {children}
    </article>
  );
};
