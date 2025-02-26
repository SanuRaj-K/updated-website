import React from "react";
import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
      <ClockLoader
        color="#24D765"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
