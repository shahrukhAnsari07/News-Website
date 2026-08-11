function Trending({ news }) {
  const trendingNews = news.filter(
    (item) => item.trending
  );

  return (
    <section
      className="trending-section"
      id="trending"
    >
      <div className="section-heading">
        <div>
          <span className="section-label">
            WHAT'S HOT
          </span>

          <h2>🔥 Trending Now</h2>
        </div>

        <span className="live-indicator">
          <span></span>
          LIVE
        </span>
      </div>

      <div className="trending-grid">
        {trendingNews
          .slice(0, 4)
          .map((item, index) => (
            <div
              className="trending-item"
              key={item.id}
            >
              <div className="trending-number">
                0{index + 1}
              </div>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="trending-info">
                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <small>{item.readTime}</small>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Trending;