import React from "react";

import "./index.scss";

export default function ({ url, title }) {
  return (
    <div
      className="photo__container__item"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <p className="photo__container__item__title">{title}</p>
    </div>
  );
}
