function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <div className="category-filter" id="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "category-button active"
              : "category-button"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;