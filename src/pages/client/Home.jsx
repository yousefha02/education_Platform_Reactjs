import React from 'react'
import DownloadApp from '../../components/client/home/DownloadApp'
import Footer from '../../components/client/home/Footer'
import HomeAbout from '../../components/client/home/HomeAbout'
import HomeBanner from '../../components/client/home/HomeBanner'
import HomeImages from '../../components/client/home/HomeImages'
import HomeQuestions from '../../components/client/home/HomeQuestions'
import HomeWorks from '../../components/client/home/HomeWorks'
import LinksFooter from '../../components/client/home/LinksFooter'
import Navbar from '../../components/Navbar'

export default function Home() {
  return (
    <Navbar>
        <HomeBanner/>
        <HomeImages/>
        <HomeWorks/>
        <HomeAbout/>
        <HomeQuestions/>
        <DownloadApp/>
        <LinksFooter/>
        <Footer/>
    </Navbar>
  )
}
