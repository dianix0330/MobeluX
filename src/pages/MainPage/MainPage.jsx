import React from "react";
import { AlbumContainer } from "../../components";
import { PageTitle } from "../../components";
import "./index.scss";

export default function MainPage() {
  return (
    <div className="main">
      <PageTitle pageTitle="Photo Albums" />
      <AlbumContainer />
    </div>
  );
}
