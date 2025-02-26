import React from "react";
import { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card" style={{ ...styles.productCard }}>
      <div
        className="thumbnail-container"
        style={{ ...styles.thumbnailContainer }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ ...styles.img }}
        />
      </div>
      <h3 className="title"> {product.title?.substring(0, 100) + "..."}</h3>
      <p className="price">${product.price}</p>
      <div className="flex-spacer" style={{ ...styles.flexSpacer }}></div>
      <p className="description">
        {product.description?.substring(0, 100) + "..."}
      </p>
      <button className="button">Add to Cart</button>
    </div>
  );
}
const styles = {
  productCard: {
    backgroundColor: "white",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    color: "black",
    display: "flex",
    flexDirection: "column" as const,
    height: "auto",
    flexGrow: 1,
  },
  thumbnailContainer: {
    width: "100%",
    height: "170px",
    // maxWidth: "150px",
    objectFit: "cover" as const,
    borderRadius: "8px",
  },
  img: {
    height: "150px",
    objectFit: "cover" as const,
    borderRadius: "8px",
  },
  flexSpacer: {
    flex: 1,
    flexGrow: 1,
  },
};
