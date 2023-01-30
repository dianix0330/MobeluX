import React from "react";
import { PhotoContainer } from "../../components";
import { PageTitle } from "../../components";
import { useLocation, useParams } from "react-router-dom";

// This is the PhotoPage component which is the photo page of the application.

export default () => {
  const location = useLocation(); //This uses the React Router useLocation hook to get the current location information

  let { id } = useParams(); //This uses the React Router useParams hook to get the id of the current route params

  const { title } = location.state; //This gets the title from the current location state

  return (
    <div className="main">
      <PageTitle pageTitle={"Album Title"} />
      <PhotoContainer AlbumId={id} />
    </div>
  );
};
