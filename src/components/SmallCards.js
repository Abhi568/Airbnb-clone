import React from 'react'
import "./SmallCards.css"
import FavHeartIcon from "./../images/favHeartIcon.png"

export default function SmallCards(props) {
    let data = props.data
    return (
        <div className="card me-3 small-cards" style={{ minWidth: '13.5rem', height: "25rem" }}>
            <img src={FavHeartIcon} alt="" className='fav-heart-icon' />
            <img src={data.image} className="card-img-top image-class" alt="..." />
            <div className='card-body'>
                <div>
                    <small className='star-class'>&#9733;</small>
                    <small className="px-1">{data.rating}</small>
                    <small className="px-1">({data.peopleReviewCount})</small>
                    <small className="px-1" style={{ color: "#717171" }}>{data.country}</small>
                </div>
                <p className="card-text">{data.description}</p>
                <small className='fw-semibold fs-6'>From &#8377; {data.price}/</small>person
            </div>

        </div>
    )
}
