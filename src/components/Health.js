import React, { useEffect, useState } from "react";
import HealthItems from "./HealthItems";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import "../styles/colors.scss";
import "../styles/Health.scss";

const Health = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateHealth = async () => {
    props.setProgress(10);
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aef3529783ad486b862723425c0b9a0c&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateHealth();
  }, []);

  const fetchMoreData = async () => {
    // Increment the page
    const nextPage = page + 1;
    setPage(nextPage);

    // Fetch data for the next page
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=aef3529783ad486b862723425c0b9a0c&page=${nextPage}&pageSize=${props.pageSize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();

      // Update state using the previous state
      setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Container">
      <h1 className="firstLetter" data-aos="fade-right">
        {" "}
        and Fitness
      </h1>
      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles && articles.length !== totalResults}
      >
        <div className="healthColContainer">
          {articles &&
            articles.map((element) => (
              <div className="healthCol" key={element.url}>
                <HealthItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

Health.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "health",
};

Health.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Health;
