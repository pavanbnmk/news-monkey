import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

    static defaultProps = {
        pageSize: 20,
        country: 'in',
        category: 'general'
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capFirst = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capFirst(this.props.category)} - NewsMonkey`; 
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=21898cf070e34d86846049289973a851&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1})
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
   
    render() {

        return (
            <>
                <div className='container my-3'>
                    <h1 className='text-center' style={{margin: "35px 0px"}}>NewsMonkey - Top {this.capFirst(this.props.category)} Headlines</h1>
                    {this.state.loading && <Spinner/>}
                    <div className='row'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div key={element.url} className='col-lg-4'>
                                <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source} />
                            </div>
                        })}

                    </div>
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} className='btn btn-sm btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}className='btn btn-sm btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </>
        )
    }
}