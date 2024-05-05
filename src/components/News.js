import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const capFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        //eslint-disable-next-line
        document.title = `${capFirst(props.category)} - NewsMonkey`;
    }, []);


    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    return (
        <>
            <h1 className='text-center' style={{ margin: "35px 0px", marginTop: "90px" }}>NewsMonkey - Top {capFirst(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
                            return <div key={element.url} className='col-lg-4'>
                                <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </>
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;