import * as React from "react";
import { Link } from "gatsby";
import { Wetsuit } from "../common/types";
import { getTitle, PLACEHOLDER_IMAGE_URL } from "../common/util";
import BuyButton from "./BuyButton";

interface TileProps {
  product: Wetsuit;
  imageUrl: string;
}

const Tile = (props: TileProps) => {
  const { product, imageUrl } = props;
  const title = getTitle(product);

  let notes = product.condition ? product.condition : "";
  if (product.feature) {
    if (product.condition) {
      notes += ", ";
    }
    notes += product.feature;
  }

  return (
    <div className="flex rounded-lg my-2 bg-white">
      <div className="flex-none w-1/2 sm:w-48 relative">
        <img
          src={imageUrl || PLACEHOLDER_IMAGE_URL}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-auto p-2 sm:p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto sm:text-xl font-semibold">{title}</h1>
          <div className="sm:text-xl font-semibold text-gray-500">
            {product.price && `$${product.price}`}
          </div>
          <div className="w-full hidden sm:block sm:flex-none text-sm font-medium text-gray-500 my-2">
            {notes}
          </div>
        </div>
        <div className="flex flex-wrap sm:space-x-2 my-2 text-xs sm:text-sm font-medium">
          <span className="sm:w-5/12 w-full mb-1">
            <BuyButton title={title} />
          </span>
          <span className="sm:w-5/12 w-full h-9">
            <Link to={`/product/${product.id.toLowerCase()}`}>
              <button
                className="w-full h-full rounded-sm border border-gray-300"
                type="button"
              >
                More details
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tile;
