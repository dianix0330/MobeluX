import React from "react";
import { PhotoContainer } from "../../components";
import { PageTitle } from "../../components";
import { useLocation, useParams } from "react-router-dom";
import "./index.scss";

export default () => {
  const location = useLocation();
  let { id } = useParams();
  const { title } = location.state;
  return (
    <div className="main">
      <PageTitle pageTitle={title} />
      <PhotoContainer AlbumId={id} />
    </div>
  );
};
