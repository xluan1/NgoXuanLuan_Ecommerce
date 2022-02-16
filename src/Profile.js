import React from 'react'
import ContentProfile from './components/user/ContentProfile'
import Footer from './components/Footer'
import Header from './components/Header'
import ProfileMain from './components/user/ProfileMain'
import ProfileSeller from './components/user/ProfileSeller'
import ProfileSetting from './components/user/ProfileSetting'

export const Main = () => {
    return (
        <>
            <Header />
            <ContentProfile child={<ProfileMain />} />
            <Footer />
        </>
    )
}

export const Seller = () => {
    return (
        <>
            <Header />
            <ContentProfile child={<ProfileSeller />} />
            <Footer />
        </>
    )
}

export const Setting = () => {
    return (
        <>
            <Header />
            <ContentProfile child={<ProfileSetting />} />
            <Footer />
        </>
    )
}

export default Main
