import { Product } from "../../types/product";

export default function ProductFilter({
  category,
  setQuery,
  setFilter,
}: {
  category: Product[];
  setQuery: (query: string) => void;
  setFilter: (filter: string) => void;
}) {
  let categories = new Set();
  if (category.length >= 1) {
    categories = new Set(
      category?.map(
        (item) =>
          item.category?.charAt(0).toUpperCase() + item.category.slice(1)
      )
    );
  }
  return (
    <div className="filter-container">
      <div className="filter-container__title">Filter</div>
      <div className="filter-container__filter">
        <div className="filter-btns">
          <button
            value="all"
            onClick={() => {
              setQuery("");
              setFilter("");
            }}
            className="filter-btn"
          >
            All
          </button>
          <button
            onClick={() => {
              setQuery("5");
              setFilter("");
            }}
            className="filter-btn"
          >
            Men
          </button>
          <button
            onClick={() => {
              setQuery("8");
              setFilter("");
            }}
            className="filter-btn"
          >
            Women
          </button>
          <div className="category-filter">
            {categories &&
              [...categories].map((item, idx) => (
                <button
                  key={`${idx}+${item}`}
                  onClick={() => setFilter(item as string)}
                  className="filter-btn"
                >
                  {item as string}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
