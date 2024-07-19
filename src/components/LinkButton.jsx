import React from "react";
import toast from "react-hot-toast";

function LinkButton({ url, content }) {
  const handleClick = () => {
    if (url === "false") {
      toast.error(
        content === "Live"
          ? `Project is not live...😕`
          : `No ${content} code...😕`
      );
    } else {
      window.open(url, "_blank");
    }
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
      >
        {content}
      </button>
    </div>
  );
}

export default LinkButton;
