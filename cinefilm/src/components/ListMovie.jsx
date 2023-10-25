import React from "react";
import Container from "./Container";
import CardMovie from "./CardMovie";
import Pagination from "./Pagination";

const ListMovie = () => {
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4 lg:-mt-80 -mt-12">Browse by category</h1>
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          <button onClick="" className="">
            All
          </button>

          <button key={[]} onClick={[]} className=""></button>
        </div>
      </div>
      <input type="text" placeholder="Search..." className="py-2 px-3 rounded mb-4 hidden" value={[]} onChange={[]} />

      <div className="text-lg text-gray-600">No movies found with the current search criteria.</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardMovie key={[]} id={[]} title={[]} image={[]} genres={[]} />
      </div>

      <Pagination />
    </Container>
  );
};

export default ListMovie;
