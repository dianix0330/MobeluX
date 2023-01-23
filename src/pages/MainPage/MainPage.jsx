import React from "react";
import { AlbumContainer } from "../../components";
import { PageTitle } from "../../components";
import "./index.scss";

// This is the MainPage component which is the main page of the application. - album page 

export default function MainPage() {
  return (
    <div className="main">
      <PageTitle pageTitle="Photo Albums" />
      <AlbumContainer />
    </div>
  );
}
