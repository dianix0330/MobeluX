import React, { createContext } from "react";
import { useFetch } from "../hooks";

const AlbumContext = createContext([]);

function AlbumProvider({ children }) {
  const { loading, data, error } = useFetch(process.env.REACT_APP_ALBUM_URL);
  return (
    <AlbumContext.Provider value={{ loading, data, error }}>
      {children}
    </AlbumContext.Provider>
  );
}

export { AlbumContext, AlbumProvider };
