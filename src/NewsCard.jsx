function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} />

      <div className="card-content">
        <span className="category">{news.category}</span>

        <h2>{news.title}</h2>

        <p>{news.description}</p>

        <button>Read More</button>
      </div>
    </div>
  );
}

export default NewsCard;