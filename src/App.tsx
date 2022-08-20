import React from "react";
import logo from "./logo.svg";
import "./styles/globals.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import NotFoundPage from "404";
import HomePage from "containers/homepage";
import Navbar from "components/core/navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="mb:px-4 lg:px-6 xl:px-8">
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
