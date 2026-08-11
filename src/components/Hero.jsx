function Hero({ news }) {
  if (!news) return null;

  return (
    <section className="hero" id="home">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${news.image})`
        }}
      ></div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">
          🔥 FEATURED GAMING NEWS
        </div>

        <h1>{news.title}</h1>

        <p>{news.description}</p>

        <div className="hero-meta">
          <span>✍️ {news.author}</span>
          <span>📅 {news.date}</span>
          <span>⏱️ {news.readTime}</span>
        </div>

        <div className="hero-buttons">
          <a href="#latest" className="primary-button">
            Explore News →
          </a>

          <a href="#trending" className="secondary-button">
            🔥 Trending
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;