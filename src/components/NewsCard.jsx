import { useState } from "react";

function NewsCard({ news }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <article className="news-card">
      <div className="card-image-wrapper">
        <img
          src={news.image}
          alt={news.title}
        />

        <span className="card-category">
          {news.category}
        </span>

        {news.trending && (
          <span className="trending-badge">
            🔥 Trending
          </span>
        )}
      </div>

      <div className="card-content">
        <div className="card-meta">
          <span>{news.date}</span>
          <span>•</span>
          <span>{news.readTime}</span>
        </div>

        <h2>{news.title}</h2>

        <p>{news.description}</p>

        <div className="card-footer">
          <span className="author">
            By {news.author}
          </span>

          <div className="card-actions">
            <button
              className={
                liked
                  ? "action-button liked"
                  : "action-button"
              }
              onClick={() => setLiked(!liked)}
              aria-label="Like article"
            >
              {liked ? "❤️" : "🤍"}
            </button>

            <button
              className={
                bookmarked
                  ? "action-button bookmarked"
                  : "action-button"
              }
              onClick={() =>
                setBookmarked(!bookmarked)
              }
              aria-label="Bookmark article"
            >
              {bookmarked ? "🔖" : "📑"}
            </button>
          </div>
        </div>

        <button className="read-button">
          Read Full Story →
        </button>
      </div>
    </article>
  );
}

export default NewsCard;