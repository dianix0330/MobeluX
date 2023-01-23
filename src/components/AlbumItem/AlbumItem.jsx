import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function AlbumItem ({ id, title }) {
  return (
    <div className="album__container__item">
      <Link
        to={`/albums/${id}`}
        className="album__container__item__title"
        state={{ title }}
      >
        {title}
      </Link>
    </div>
  );
}
