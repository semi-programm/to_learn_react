import "./App.css";

import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { InitPage, Layout, ZipCode, Binding } from "./pages";
import { AppDispatch, useSelector } from "./redux/store";
import { useDispatch } from "react-redux";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='init' element={<InitPage />} />
        <Route path='zip_code' element={<ZipCode />} />
        <Route path='binding' element={<Binding />} />
        <Route path='*' element={<Navigate to='/init' />} />
      </Route>
    </Routes>
  );
}

export default App;
