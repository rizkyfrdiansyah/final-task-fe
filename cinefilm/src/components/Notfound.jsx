import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-8 -mb-6">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold text-red-500">404 - Eng ing enggg</h1>
        <p className="text-gray-600 mt-2">Sabar ya halaman ini tidak bisa diakses.</p>
        <Link to="/" className="mt-4 inline-block bg-secondary hover:bg-primary text-white px-4 py-2 rounded-lg hover-bg-blue-600 transition duration-300 ease-in-out">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
