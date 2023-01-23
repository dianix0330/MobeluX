import React from "react";
import Scroll from "react-awesome-scroll";
import AlbumItem from "../AlbumItem/AlbumItem.jsx";
import { AlbumContext } from "../../contexts/AlbumContext";
import "./index.scss";

export default function AlbumContainer() {
  const { data } = React.useContext(AlbumContext);

  return (
    <Scroll>
      <div className="album__container">
        {data.map((album_item, index) => (
          <AlbumItem
            key={index + ":" + album_item.id}
            id={album_item.id}
            title={album_item.title}
          />
        ))}
      </div>
    </Scroll>
  );
}
