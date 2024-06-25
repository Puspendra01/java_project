import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import Category from '../../components/Category/Category'
import HomeSectionCarosel from '../../components/homesectioncarosel/HomeSectionCarosel'
import { SectionData } from '../../components/HomeSectionCard/SectionData'

function HomePage() {
  return (
    <>
    <div>
        <MainCarosel />
        <div>
          <Category />
        <div className=' space-y-10 pt-20 flex flex-col justify-center'>
            
            <HomeSectionCarosel Data={SectionData} SectionName={"Apple"}/>
            <HomeSectionCarosel Data={SectionData} SectionName={"HP"}/>
            <HomeSectionCarosel Data={SectionData} SectionName={"Dell"}/>
            <HomeSectionCarosel Data={SectionData} SectionName={"Lenovo"}/>
        </div>
    </div>
</div>
</>
  )
}

export default HomePage