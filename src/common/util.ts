import { Wetsuit } from "./types";

export const PLACEHOLDER_IMAGE_URL = "https://placekitten.com/250/250";

export const getSize = (product: Wetsuit) => {
  const cat =
    product.category === "Youth" ? product.category : `${product.category}'s`;
  const size = isNaN(+product.size) ? product.size : `Size ${product.size}`;
  return `${cat} ${size}`;
};

export const getTitle = (product: Wetsuit) => {
  const thickness = product.thickness ? `[${product.thickness}] ` : "";
  return `${thickness}${getSize(product)} — ${product.brand}`;
};
