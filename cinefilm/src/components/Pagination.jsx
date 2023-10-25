import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <button key={[]} onClick={[]} className="">
        page
      </button>

      <button onClick={[]} disabled={[]} className="ml-4 px-3 py-2 bg-gray-200 text-gray-500 rounded-r hover:bg-gray-300">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
