import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h2 style={{color: "red"}}>Error</h2>
    </div>
  );
};

export default Error;
