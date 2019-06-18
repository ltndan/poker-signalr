import React from "react";

export const Card = ({ value, type, big = true }) => (
  <img
    style={{ margin: "1em", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: big ? "10vw" : "5vw" }}
    src={`./${type}/${value}.png`}
    alt={`${value} of ${type}`}
    title={`${value} of ${type}`}
  />
);
