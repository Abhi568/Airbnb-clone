import React from 'react'
import "./BigCards.css"

export default function BigCards(props) {
    let data = props.data
    return (
        <div className="big-cards me-3" style={{ position: "relative" }}>
            <div className='top-section'>
                <small className='tag'>Collection</small>
                <p className='fs-3 fw-semibold title' >{data.title}</p>
            </div>
            <div className="big-card-image" style={{ minWidth: window.$widthOfBigCards + 'rem' }}>
                <img src={data.image} className="card-img-top border-radius big-card-image" alt="..." />
            </div>
            <button type="button" className="btn btn-light button">Show all</button>
        </div>
    )
}
