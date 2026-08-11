import Navbar from "./Navbar";
import NewsCard from "./NewsCard";
import Footer from "./Footer";
import newsData from "./data";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="main-section">
        <h1>Latest News</h1>

        <div className="news-container">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;