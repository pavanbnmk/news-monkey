import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props
        return (
            <div className="card my-3">
                <img src={!imageUrl ? "/dummy.jpg" : imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}>
                            {source.name}
                        </span>
                    </h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text text-center'><small className='text-muted'>Author: {author ? author : 'Unknown'} on {publishedAt}</small></p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary text-center right">Read More</a>
                </div>
            </div>
        )
    }
}