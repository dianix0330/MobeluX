import React, { useState } from "react";
import Scroll from "react-awesome-scroll";
import { useFetch } from "../../hooks";
import PhotoItem from "../PhotoItem/PhotoItem.jsx";
import "./index.scss";
import "../../App.css";

export default function PhotoContainer({ AlbumId }) {
  const { loading, data, error } = useFetch(
    `${process.env.REACT_APP_ALBUM_URL}/${AlbumId}/photos`
  );

  const [show, setShow] = useState(false);
  const [url, setURL] = useState("");
  const [title, setTitle] = useState("");

  const OnPhotoClick = (_url, _title) => {
    setShow(!show);
    setURL(_url);
    setTitle(_title);
  };

  if(error) {
    throw new Error(error.statusText);
  }

  if (loading || !data) {
    return (
      <div className="photo__container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <Scroll>
        <div className="photo__container">
          {data.map((photo_item, index) => (
            <PhotoItem
              key={index + ":" + photo_item.id}
              id={photo_item.id}
              thumbnailUrl={photo_item.thumbnailUrl}
              url={photo_item.url}
              handlePhotoClick={() =>
                OnPhotoClick(photo_item.url, photo_item.title)
              }
            />
          ))}
        </div>
      </Scroll>
      {show && (
        <>
          <div
            className="photo__container__modal"
            onClick={() => OnPhotoClick("", "")}
          >
            <div className="modal__container">
              <div
                className="modal__container__content"
                style={{
                  backgroundImage: `url(${url})`,
                }}
              ></div>
              <div className="modal__container__title">{title}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
