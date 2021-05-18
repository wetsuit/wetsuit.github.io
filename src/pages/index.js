import React, { useState } from "react";
import { graphql } from "gatsby";

import Filter from "../components/Filter";
import Layout from "../components/Layout";
import Seo from "../components/seo";
import Tile from "../components/Tile";

const buildImageUrlMap = resp => {
  const images = new Map();
  resp["images"]["edges"].forEach(edge => {
    images.set(edge["node"]["relativeDirectory"], edge["node"]["publicURL"]);
  });
  return images;
};

const IndexPage = ({ data }) => {
  const [filter, setFilter] = useState("All");
  const imageUrlMap = buildImageUrlMap(data);
  const products = data["products"]["nodes"];

  return (
    <Layout>
      <Seo title="Home" />
      <Filter onFilterChange={e => setFilter(e.target.id)} />
      {products
        .filter(p => filter === "All" || p.category === filter) // todo: refactor
        .map(p => (
          <Tile product={p} imageUrl={imageUrlMap.get(p.id)} key={p.id} />
        ))}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    images: allFile(filter: { name: { eq: "1" } }) {
      edges {
        node {
          publicURL
          relativeDirectory
        }
      }
    }
    products: allInventoryXlsxWetsuits {
      nodes {
        brand
        category
        color
        condition
        feature
        hooded
        id
        price
        size
        thickness
      }
    }
  }
`;
