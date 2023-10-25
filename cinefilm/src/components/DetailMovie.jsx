// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function formatBudget(budget) {
//     if (budget >= 1000000) {
//         return `${(budget / 1000000) .toFixed(2)} milion USD`
//     } else {
//         return `${budget} USD`
//     }
// }

// const DetailMovie = () => {
//     const {id} = useParams();
//     const [movie, setMovie] = useState(null);
//     const [characters, setCharacters] = useState([]);
//     const [review, setReviews] = useState([]);
//     const [activeTab, setActiveTab] = useState("overview");
//     const [trailerKey, setTrailerkey] = useState("");
//     const [isTrailerOpen, setIsTrailerOpen] = useState(false);
//     const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);

//     useEffect(() => {
//         async function fetchDetailMovie() {
//             try {
//                 const apiKey = "4e1b1ffc3c8009bd343474c579a3f359"
//                 const response = await axios.get(`https://api.themoviedb.org/3`)
//             };
//         }
//     })

//   return (
//     <div className="mt-16 mb-10">
//       {/* Banner */}
//       <div className="bg-black text-white py-16 px-4">
//         <div className="container mx-auto flex items-center">
//           <div className="ml-8">
//             <h1 className="text-4xl font-black">movietitle</h1>
//             <div className="flex items-center mt-4">
//               <div className="mr-4">voteaverage</div>
//               <div>
//                 <span className="text-xl">count</span>
//               </div>
//             </div>
//             <p className="mt-4 text-xl">overview</p>
//             <div className="mt-8">
//               <button className="bg-primary hover:bg-secondary transition duration-300 ease-in-out rounded-md text-white px-4 py-2 mr-4">Watch Trailer</button>
//               <button></button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mb-4 mt-12">
//         <Container>
//           <div className="flex space-x-4">
//             <button>Overview</button>
//             <button>Character</button>
//             <button>Review</button>
//           </div>
//         </Container>
//       </div>
//       <Container>
//         <h2 className="text-2xl font-bold mt-10">Synopsis</h2>
//         <p className="text-gray-700 mt-2">
//           <span>Data not available</span>
//         </p>
//         <h2 className="text-2xl font-bold mt-4 mb-2">Movie Info</h2>
//         <p>
//           <strong>Release date</strong>
//           <span>Data not available</span>
//         </p>
//         <p>
//           <strong>Director</strong>
//           <span>Data not available</span>
//         </p>
//         <p>
//           <strong>Featured song</strong>
//           <span>Data not available</span>
//         </p>
//         <p>
//           <p>
//             <strong>Budget</strong>
//             <span>Data not available</span>
//           </p>
//         </p>
//       </Container>

//       <Container>
//         <h2 className="text-2xl font-bold mb-2 mt-10">Character</h2>
//         <ul>
//           character
//           <div>
//             <ul>
//               character
//               <li className="mb-2">
//                 <strong>character.name</strong>
//               </li>
//             </ul>
//           </div>
//         </ul>
//       </Container>

//       <Container>
//         <h2 className="text-2xl font-bold mb-2 mt-10">Reviews</h2>
//         <ul>
//           <div>
//             <h2 className="text-xl font-semibold">Review</h2>
//             <ul>
//               <li className="mb-2">
//                 <strong>review.author</strong>
//               </li>
//             </ul>
//           </div>
//         </ul>
//       </Container>

//       {/* Trailer Pop-up */}
//       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
//         <div className="bg-white p-4 rounded-md w-full max-w-md flex flex-col items-center justify-center mt-10">
//           <iframe title="Trailer" width="100%" height="315" src="" frameborder="0" allowFullScreen></iframe>

//           <button className="bg-red-500 text-white px-3 py-2 mt-3 rounded" onClick="">
//             Close Trailer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailMovie;
