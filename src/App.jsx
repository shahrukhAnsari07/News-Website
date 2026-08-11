import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import NewsCard from "./components/NewsCard";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

import newsData from "./data/data";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredNews =
    newsData.find((news) => news.featured) || newsData[0];

  const categories = useMemo(() => {
    return ["All", ...new Set(newsData.map((news) => news.category))];
  }, []);

  const filteredNews = useMemo(() => {
    return newsData.filter((news) => {
      const matchesCategory =
        selectedCategory === "All" ||
        news.category === selectedCategory;

      const searchText = searchTerm.toLowerCase();

      const matchesSearch =
        news.title.toLowerCase().includes(searchText) ||
        news.description.toLowerCase().includes(searchText) ||
        news.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero news={featuredNews} />

        <section className="stats-section">
          <div className="stat-box">
            <strong>12+</strong>
            <span>Gaming Stories</span>
          </div>

          <div className="stat-box">
            <strong>08</strong>
            <span>Categories</span>
          </div>

          <div className="stat-box">
            <strong>24/7</strong>
            <span>Gaming Updates</span>
          </div>

          <div className="stat-box">
            <strong>∞</strong>
            <span>Gaming Passion</span>
          </div>
        </section>

        <Trending news={newsData} />

        <section className="latest-section" id="latest">
          <div className="section-heading latest-heading">
            <div>
              <span className="section-label">
                STAY UPDATED
              </span>

              <h2>📰 Latest Gaming News</h2>
            </div>

            <span className="news-count">
              {filteredNews.length} Stories
            </span>
          </div>

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {filteredNews.length > 0 ? (
            <div className="news-container">
              {filteredNews.map((news) => (
                <NewsCard
                  key={news.id}
                  news={news}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div>🎮</div>

              <h3>No gaming news found</h3>

              <p>
                Try searching for another game or category.
              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Show All News
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;