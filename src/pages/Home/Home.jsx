import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import ProductsPage from "../../features/Products/ProductsPage";
import HeroBanner from "./heroBanner/HeroBanner";

function Home() {
  return (
    <div className="homepage">
      <ContentWrapper>
        <HeroBanner />
        <ProductsPage />
      </ContentWrapper>
    </div>
  );
}

export default Home;
