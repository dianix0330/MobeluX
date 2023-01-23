import React from "react";
import { MainPage, PhotoPage } from "./pages";
import { Header } from "./components/";
import { AlbumContext } from "./contexts/AlbumContext";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const { loading, data } = React.useContext(AlbumContext);

  if (loading || !data) {
    return (
      <div className="App">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/albums" />} />
            <Route path="/albums/" element={<MainPage />} />
            <Route path="/albums/:id" element={<PhotoPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
