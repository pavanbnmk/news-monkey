import React from 'react'

const NewsItem =(props) => {

        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props
        return (
            <div className="card my-3">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', left: '0' }}>
                    <span className="badge rounded-pill bg-danger"> {source.name} </span>
                </div>
                <img src={!imageUrl ? "/dummy.jpg" : imageUrl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text text-center'><small className='text-muted'>Author: {author ? author : 'Unknown'} on {publishedAt}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary text-center right">Read More</a>
                </div>
            </div>
        )
}
export default NewsItem;