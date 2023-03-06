import React from 'react'
import Navbar from '../../components/Navbar'
import LinksFooter from '../../components/client/home/LinksFooter'
import DownloadApp from '../../components/client/home/DownloadApp'
import Footer from '../../components/client/home/Footer'
import LandingBanner from '../../components/client/landing/LandingBanner'
import LandingSubjects from '../../components/client/landing/LandingSubjects'
import LandingTestimonials from '../../components/client/landing/LandingTestimonials'
import LandingReasons from '../../components/client/landing/LandingReasons'
import LandingJoin from '../../components/client/landing/LandingJoin'

export default function Landing() {
    return (
        <Navbar>
            <LandingBanner/>
            <LandingSubjects/>
            <LandingTestimonials/>
            <LandingReasons/>
            <LandingJoin/>
            <DownloadApp/>
            <LinksFooter/>
            <Footer/>
        </Navbar>
    )
}
