import React from "react";
import { MainPage } from "./pages";
import { Header } from "./components/";
import { AlbumContext } from "./contexts/AlbumContext";

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
      <MainPage />
    </div>
  );
}

export default App;
