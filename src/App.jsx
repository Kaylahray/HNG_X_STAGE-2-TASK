/* eslint-disable no-undef */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import "react-loading-skeleton/dist/skeleton.css";
import MovieDetail from "./Pages/MovieDetail/MovieDetail";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/*" element={<h2>Error</h2>} />
      <Route path="movies/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
