import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
import './style.css'


export default function NewsBoard({category}) {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    // fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setArticles(data.articles))
    .catch(error => {
      console.error('Error fetching data:', error);
      // Optionally, handle error state or retry fetch
    });
  },[category])


  return (
    <div className="container">
      <div className="heading"><h1>NEWS FLASH <i className="fa-solid fa-bolt"></i></h1></div>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
      {articles && articles.map((news, index) => (
  <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
))}
      </div>
    </div>
  )
}

