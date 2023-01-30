import { useContext } from "react";
import ReactShadowScroll from "react-shadow-scroll";
import AlbumItem from "../AlbumItem/AlbumItem.jsx";
import { AlbumContext } from "../../contexts/AlbumContext";
import "./index.scss";

//This is the AlbumContainer component which is responsible for displaying the albums.

export default function AlbumContainer() {
  const { data } = useContext(AlbumContext); //Use AlbumContext to get the data of the Albums.
  return (
    <ReactShadowScroll isShadow={false}>
      <div className="album__container">
        {/*AlbumContainer returns a div which contains the AlbumItem component for each album in the context data.*/}
        {data.map((album_item, index) => (
          <AlbumItem
            key={index + ":" + album_item.id}
            id={album_item.id}
            title={album_item.title}
          />
        ))}
      </div>
    </ReactShadowScroll>
  );
}
