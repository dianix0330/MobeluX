import React from "react";

import "./index.scss";

export default function ({ id, title }) {
  return (
    <div className="album__container__item">
      <p className="album__container__item__title">{title}</p>
    </div>
  );
}
