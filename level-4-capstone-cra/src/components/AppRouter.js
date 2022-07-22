import React from "react";
import { Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash";
import APOD from "../pages/APOD";
import JWST from "../pages/JWST";
import RandomImage from "../pages/RandomImage";
import SearchResults from "../pages/SearchResults";

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/jwst" element={<JWST />} />
        <Route path="/randomimage" element={<RandomImage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
  )
}
