function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-wrapper">
      <div className="search-icon">
        🔍
      </div>

      <input
        type="text"
        placeholder="Search gaming news..."
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
      />

      {searchTerm && (
        <button
          className="clear-search"
          onClick={() => setSearchTerm("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;