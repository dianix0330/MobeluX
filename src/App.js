import React from "react";
import { MainPage, PhotoPage } from "./pages";
import { Header } from "./components/";
import { AlbumContext } from "./contexts/AlbumContext";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  const { loading, data } = React.useContext(AlbumContext);

  if (loading || !data) { // If the loading state is true or the data is undefined, it displays the loader.
    return (
      <div className="App">
        <div className="loader"></div>
      </div>
    );
  }

  // Else, it renders the Header, Router and Routes. Router is used to switch between the routes, MainPage and PhotoPage. 
  return (
    <div className="App"> 
      <Header />
      <Router>
        <Routes>
            <Route exact path="/" element={<Navigate to="/albums" />} />
            {/* Routes defines the exact paths for each of the pages and If the path is not match the urls it redirects to the album page. */}
            <Route path="/albums/" element={<MainPage />} />
            <Route path="/albums/:id" element={<PhotoPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
