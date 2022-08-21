import React from "react";
import logo from "./logo.svg";
import "./styles/globals.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import NotFoundPage from "404";
import HomePage from "containers/homepage";
import SearchPage from "containers/search";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/search/*" element={<SearchPage />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
