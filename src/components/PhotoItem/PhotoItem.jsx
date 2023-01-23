import React from "react";

import "./index.scss";

export default function ({ url, title, thumbnailUrl, handlePhotoClick }) {
  return (
    <div
      className="photo__container__item"
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
      }}
      onClick={handlePhotoClick}
    >
      <p className="photo__container__item__title">{title}</p>
    </div>
  );
}
