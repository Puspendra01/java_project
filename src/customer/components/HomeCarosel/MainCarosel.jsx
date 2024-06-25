import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';


function MainCarosel() {
  const items = mainCaroselData.map((item) => <img className=' overflow-hidden'
    style={{ height: "50%", width: "100%" }} src={item.download_url} role='presentation' alt='/' />)

  return (
    <>
      <div className=''>
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          infinite
        />
      </div>

    </>
  )
}

export default MainCarosel