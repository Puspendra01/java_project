/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@mui/material';
import SectionCard from '../HomeSectionCard/SectionCard';
import { SectionData } from '../HomeSectionCard/SectionData';
import Product_Details from '../ProductDetail/Product_Details';
function HomeSectionCarosel({Data, SectionName}) {

    const responsive = {
        0: {
            items: 1
        },
        320: {
            items: 2
        },
        560: {
            items: 3
        },
        1024: {
            items: 5
        },
    };

    const [activeIndex, setactiveIndex] = useState(0);

    const slideprev = () => setactiveIndex(activeIndex - 1);
    const slideNext = () => setactiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setactiveIndex(item)
    const items = Data.map((item) => <SectionCard product={item} />)
    const detail = Data.map((item) => <Product_Details product={item} />)
    return (
        <>
            <div className=' relative px-4 lg:px-8'>
            <div className=' border px-5 bg-slate-50'>
            <h2 className='text-2xl font-extrabold text-slate-700'>{SectionName}</h2>
        
            
                <div className=' relative p-5'>
                    <AliceCarousel
                        items={items}
                        disableButtonsControls
                        responsive={responsive}
                        disableDotsControls
                        onSlideChanged={syncActiveIndex}
                        activeIndex={activeIndex}
                    />
                    {activeIndex !== items.length - 5 && <Button
                        onClick={slideNext} variant="contained" className="z-50 bg-white" sx={{
                            position: 'absolute', top: '8rem'
                            , right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white'
                        }} aria-label="next">
                        <ArrowBackIosIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                    </Button>}

                    {activeIndex !== 0 && <Button
                        onClick={slideprev} variant="contained" className="z-50 bg-white" sx={{
                            position: 'absolute', top: '8rem'
                            , left: '0rem', transform: 'translateX(-50%) rotate(90deg)', bgcolor: 'white'
                        }} aria-label="next">
                        <ArrowBackIosIcon sx={{ transform: 'rotate(-90deg)', color: "black" }} />
                    </Button>}
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeSectionCarosel