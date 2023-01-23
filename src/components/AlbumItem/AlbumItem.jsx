import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function AlbumItem ({ id, title }) {
  return (
    <div className="album__container__item">
      {/* This Link elment renders a link to the specific album page by albumid. The state property is used to pass the album title to the photo page. */}
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
