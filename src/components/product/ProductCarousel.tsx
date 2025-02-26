import { Product, Products } from "../../types/product";
import ProductCard from "./ProductCard";
import { useState } from "react";
export default function ProductCarousel({
  products,
  isFetching,
  category,
}: {
  products: Products;
  isFetching: boolean;
  category: string;
}) {
  const [page, setPage] = useState(1);

  const itemsPerPage = 4;
  const displayedProducts = Array.isArray(products)
    ? products?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [products];

  const hasNextPage = products.length > page * itemsPerPage;
  const hasPrevPage = page > 1;

  let filteredProducts = displayedProducts;
  if (category !== "") {
    console.log("category!", category);
    filteredProducts = displayedProducts.filter(
      (product) => product.category === category.toLowerCase()
    );
  }
  console.log("filteredProducts", filteredProducts, products);
  return (
    <>
      <div className="product-carousel" style={{ ...styles.productCarousel }}>
        <div
          className="product-carousel__container"
          style={{ ...styles.productCarouselContainer }}
        >
          {filteredProducts.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
        <button onClick={() => setPage(page + 1)} disabled={!hasNextPage}>
          {isFetching
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
        <button onClick={() => setPage(page - 1)} disabled={!hasPrevPage}>
          {isFetching ? "Loading more..." : hasPrevPage ? "Back" : ""}
        </button>
      </div>
      <div>{isFetching ? "Fetching..." : null}</div>
    </>
  );
}

const styles = {
  productCarousel: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  productCarouselContainer: {
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    height: "100%",
    flexWrap: "wrap" as const,
  },
};
