import React from 'react'
import SectionSlide from './child/SectionSlide'
import SectionDeal from './child/SectionDeal'
import Laptop from './child/Laptop'
import StorageDevice from './child/StorageDevice'
import Accessory from './child/Accessory'
import SectionRequest from './child/SectionRequest'
import SectionItem from './child/SectionItem'
import SectionService from './child/SectionService'
import SectionBrand from './child/SectionBrand'


const Container = () => {

    return (
        <div className="container">
            <SectionSlide />

            <SectionDeal />

            <SectionBrand />

            <Laptop />

            <StorageDevice />

            <Accessory />

            <SectionRequest />

            <SectionItem />

            <SectionService />

        </div>
    )
}

export default Container
