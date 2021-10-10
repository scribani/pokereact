import React from "react";

export const CardImage = ({ id }) => (
  <div
    className="card-img"
    style={{
      background: `no-repeat center / 100% auto url(/images/${id}.png)`,
    }}
  ></div>
);
