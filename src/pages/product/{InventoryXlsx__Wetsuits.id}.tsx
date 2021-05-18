import * as React from "react";
import { graphql, Link } from "gatsby";
import { Wetsuit } from "../../common/types";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";
import { getSize, getTitle, PLACEHOLDER_IMAGE_URL } from "../../common/util";
import BuyButton from "../../components/BuyButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Product = ({ data }) => {
  const product: Wetsuit = data["product"]["nodes"][0];
  const title = getTitle(product);
  const details = new Map([
    // using map to preserve insertion order
    ["Brand", product.brand],
    ["Size", getSize(product)],
    ["Thickness", product.thickness],
    ["Condition", product.condition ?? "Pre-owned"],
    ["Price", product.price ? `$${product.price}` : "Please inquire"],
    ["Color", product.color],
    ["", `${product.feature}${product.hooded ? ", Hooded" : ""}`],
  ]);

  const images = data["images"]["edges"];
  if (images.length === 0) {
    images.push({
      node: { publicURL: PLACEHOLDER_IMAGE_URL },
    });
  }

  return (
    <Layout>
      <Seo title={title} />
      <Link to="/">
        <button className="w-16 h-7 border-gray-300 my-2" type="button">
          &#x2B05; Back
        </button>
      </Link>

      <div className="flex flex-wrap w-full">
        <Carousel className="w-full sm:w-1/2">
          {images.map(edge => {
            return (
              <div>
                <img src={edge.node.publicURL} className="h-auto" />
              </div>
            );
          })}
        </Carousel>

        <div className="w-full sm:w-5/12 sm:ml-2 ">
          <BuyButton title={title} className="my-2" />
          {Array.from(details).map(([key, val]) => {
            return (
              <div key={key}>
                <span className="font-bold">{key} </span>
                <span>{val}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    product: allInventoryXlsxWetsuits(filter: { id: { eq: $id } }) {
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
    images: allFile(filter: { relativeDirectory: { eq: $id } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

export default Product;
