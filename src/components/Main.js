import React, { useEffect } from 'react'
import { useState } from 'react'
import SmallCards from "./SmallCards"
import BigCards from "./BigCards"
import Button from './Buttons'
import Footer from "./Footer"
import "./Main.css"

let dataOfSmallCards = [
    {
        "image": "https://i2.wp.com/www.cookingfromheart.com/wp-content/uploads/2017/06/Kutchi-Dabeli-8.jpg?fit=1024%2C683",
        "rating": "4.4",
        "description": "Make Mexican Street Burger with a Pro Chef",
        "country": "United State",
        "price": "1,499",
        "peopleReviewCount": "155"
    },
    {
        "image": "https://www.mexperience.com/wp-content/uploads/Mexico-Handicraft-Artisan-NBS-1200x800.jpg",
        "rating": "4.4",
        "description": "Plan the perfect rangoli for holi",
        "country": "Dubai",
        "price": "1,299",
        "peopleReviewCount": "13"
    },
    {
        "image": "https://alltop.com/viral/wp-content/uploads/2013/06/Fotolia_52977926_Subscription_XL.jpg",
        "rating": "4.4",
        "description": "'From Paris with Laughs' The Scavenger Hunt",
        "country": "Italy",
        "price": "1,099",
        "peopleReviewCount": "155"
    },
    {
        "image": "https://yt3.ggpht.com/uv-y2lYaj1Kfz-LuQwSn_vesLvbrZz_EKAo7KIat5Eb1M6LOFn6fkcZIpW3YibOJoldqKseCiw=s900-c-k-c0x00ffffff-no-rj",
        "rating": "4.4",
        "description": "Plan the perfect NewYork vacation",
        "country": "Mexico",
        "price": "999",
        "peopleReviewCount": "155"
    },
    {
        "image": "https://images.hdqwalls.com/download/guy-with-sport-car-4k-j2-1920x1080.jpg",
        "rating": "4.4",
        "description": "Crack the Mystery with the new car",
        "country": "Italy",
        "price": "2,099",
        "peopleReviewCount": "105"
    },
    {
        "image": "https://ww1.prweb.com/prfiles/2013/02/20/10446995/scott-working-celebration.jpg",
        "rating": "4.4",
        "description": "Design creative Paintings with the eyes of heart",
        "country": "Canada",
        "price": "19,99",
        "peopleReviewCount": "15"
    },
    {
        "image": "https://sfondo.info/i/original/0/2/4/53062.jpg",
        "rating": "4.4",
        "description": "Plan the perfect NewYork vacation",
        "country": "Japan",
        "price": "1,299",
        "peopleReviewCount": "15"
    },
    {
        "image": "https://wallpapersmug.com/download/3840x2400/cfa618/color-spatters-texture.jpg",
        "rating": "4.4",
        "description": "Plan the perfect NewYork vacation",
        "country": "Switerland",
        "price": "5,099",
        "peopleReviewCount": "89"
    }
    ,
    {
        "image": "https://mymodernmet.com/wp/wp-content/uploads/archive/P6g0KzGHJAMxlIeAejWm_neilly1.jpg",
        "rating": "4.4",
        "description": "Plan the perfect NewYork vacation",
        "country": "Italy",
        "price": "2,099",
        "peopleReviewCount": "105"
    },
    {
        "image": "https://n1.sdlcdn.com/imgs/f/4/o/MAHALAXMI-ART-CRAFT-Shivaji-Maharaj-SDL688159601-1-fd049.jpeg",
        "rating": "4.4",
        "description": "Plan the perfect NewYork vacation",
        "country": "Canada",
        "price": "19,99",
        "peopleReviewCount": "15"
    },
    {
        "image": "https://c4.wallpaperflare.com/wallpaper/883/230/559/abstract-colorful-lion-wallpaper-preview.jpg",
        "rating": "4.4",
        "description": "Plan the perfect NewYork vacation",
        "country": "Japan",
        "price": "1,299",
        "peopleReviewCount": "15"
    },
    {
        "image": "https://artist.com/photos/arts/extra-big/sailboat-at-dawn-180016613364536.jpg",
        "rating": "4.4",
        "description": "Plan the perfect NewYork vacation",
        "country": "Switerland",
        "price": "5,099",
        "peopleReviewCount": "89"
    }
]

let dataOfBigCards = [
    {
        image: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720",
        title: "Most popular\naround the world"
    },

    {
        image: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720",
        title: "Fun for the family"
    },
    {
        image: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720",
        title: "Great for team\nbuilding"

    },
    {
        image: "https://wallpapercave.com/wp/ZIv1daS.jpg",
        title: "Most adventurous\n place around the world"
    },
    {
        image: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720",
        title: "Most popular\naround the world"
    }

]
let filterByType = [
    'Great for groups', 'Family-friendly', 'Animals', 'Arts & writing', 'Baking', 'Cooking', 'Dance', "Drinks", 'Entertainment', 'Fitness', 'History & culture', 'Magic', 'Music', 'Social impact', 'Wellness', 'Olympians & Paralympians', 'Desgined for accessibilty'
]
export default function Main() {
    let totalWidth = window.$widthOfBigCards * 16 * dataOfBigCards.length
    let [dataForSmallCards, setDataForSmallCards] = useState([])
    let [dataForBigCards, setDataForBigCards] = useState([])
    let [xSlideValue, setXSlideValue] = useState([0])
    let [xSlideValueOfFilters, setXSlideValueOfFilters] = useState([0])
    let [FilterByTypeData, setfilterByTypeData] = useState([])
    let [isRightArrowVisibleForFilter, setIsRightArrowVisibleForFilter] = useState(true)
    let [isRightArrowVisibleForBigCards, setIsRightArrowVisibleForBigCards] = useState(true)

    useEffect(() => {
        setDataForSmallCards(dataOfSmallCards)
        setDataForBigCards(dataOfBigCards)
        setfilterByTypeData(filterByType)
    }, [])

    let moveBack = () => {
        setIsRightArrowVisibleForBigCards(true)
        let coursel = document.getElementsByClassName('big-cards')
        xSlideValue = xSlideValue + 592
        setXSlideValue(xSlideValue)
        for (let i = 0; i < coursel.length; i++) {
            coursel[`${i}`].style.transform = `translate(${xSlideValue}px)`
        };
    }
    function moveForward() {
        let coursel = document.getElementsByClassName('big-cards')
        xSlideValue = xSlideValue - 592
        setXSlideValue(xSlideValue)
        for (let i = 0; i < coursel.length; i++) {
            coursel[`${i}`].style.transform = `translate(${xSlideValue}px)`
        };
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                setIsRightArrowVisibleForBigCards(false)
            }
        }, { threshold: [1] });

        observer.observe(coursel[coursel.length - 1]);
    }

    let moveBackForFilters = () => {
        setIsRightArrowVisibleForFilter(true)
        let filters = document.getElementsByClassName('btn-filter-by-type')
        xSlideValueOfFilters = parseInt(xSlideValueOfFilters) + 200
        setXSlideValueOfFilters(xSlideValueOfFilters)
        for (let i = 0; i < filters.length; i++) {
            filters[`${i}`].style.transform = `translate(${xSlideValueOfFilters}px)`
        };
    }
    let moveForwardForFilters = () => {
        let filters = document.getElementsByClassName('btn-filter-by-type')
        xSlideValueOfFilters = parseInt(xSlideValueOfFilters) - 200
        setXSlideValueOfFilters(xSlideValueOfFilters)
        for (let i = 0; i < filters.length; i++) {
            filters[`${i}`].style.transform = `translate(${xSlideValueOfFilters}px)`
        };
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                setIsRightArrowVisibleForFilter(false)
            }
        }, { threshold: [1] });

        observer.observe(filters[filters.length - 1]);
    }

    return (
        <>
            <div className='big-cards-section' style={{ border: '1px solid white' }}>
                <div className='margin-left margin-top '>
                    <div className='float-end margin-right btn-group'>
                        <button disabled={xSlideValue >= 0} style={{ opacity: xSlideValue >= 0 ? "0.2" : "1" }} className="btn">
                            <div className="right-arrow" onClick={moveBack} > <i className="arrow left"></i></div>
                        </button>
                        <button className="btn" disabled={!isRightArrowVisibleForBigCards} style={{ opacity: !isRightArrowVisibleForBigCards ? "0.2" : "1" }} onClick={moveForward} >
                            <div className="right-arrow"> <i className="arrow right"></i></div>
                        </button>
                    </div>
                    <p className='fw-bold fs-2 my-4' > New this week </p>
                    <div className='d-flex mb-3 all-cards border-radius' style={{ overflow: "auto" }}>
                        {dataForBigCards.map((data, index) => {
                            return (
                                <BigCards data={data} key={index}></BigCards>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='margin-left d-flex align-items-center filter-container'>
                <div className='d-flex justify-content-between more-filter-options'>
                    <button type="button" className="btn btn-light btn-sm">Dates</button>
                    <button type="button" className="btn btn-light btn-sm">Group Size</button>
                    <button type="button" className="btn btn-light btn-sm">More Filters</button>
                </div>
                <div className='fw-bolder me-2 horizontal-line'>|</div>
                <div className='margin-right d-flex float-left filter-by-type-container'>
                    <button className="btn btn-group" disabled={parseInt(xSlideValueOfFilters) >= 0} style={{ display: parseInt(xSlideValueOfFilters) >= 0 ? "none" : "block" }}>
                        <div className="right-arrow" onClick={moveBackForFilters} > <i className="arrow left"></i></div>
                    </button>
                    <div className='d-flex filter-by-type' style={{ overflow: "auto" }}>
                        <button type="button" className="btn btn-light btn-sm btn-filter-by-type more-filter-options-scroll">Dates</button>
                        <button type="button" className="btn btn-light btn-sm btn-filter-by-type more-filter-options-scroll">Group Size</button>
                        <button type="button" className="btn btn-light btn-sm btn-filter-by-type more-filter-options-scroll">More Filters</button>
                        {FilterByTypeData.map((type, index) => {
                            return (
                                <Button type={type} key={index}></Button>
                            )
                        })}
                    </div>
                    <button className="btn btn-group" disabled={!isRightArrowVisibleForFilter} style={{ display: !isRightArrowVisibleForFilter ? "none" : "block" }}>
                        <div className="right-arrow" onClick={moveForwardForFilters}> <i className="arrow right"></i></div>
                    </button>
                </div>
            </div>

            <div className='margin-left margin-top top-seller'>
                <p className='fw-semibold fs-3 my-3'>Top sellers </p>
                <div className='d-flex  margin-right' style={{ overflow: "auto" }}>
                    {dataForSmallCards.map((dataOfCards, index) => {
                        return (
                            <SmallCards data={dataOfCards} key={index} />
                        )
                    })}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
