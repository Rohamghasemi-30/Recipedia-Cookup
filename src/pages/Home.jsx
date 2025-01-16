import React from 'react'
import Header from '../components/Header';
import PopularRecepies from '../components/PopularRecepies';
import AbourUsSection from '../components/AbourUsSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';
import SectionPost from '../components/SectionPost';

function Home() {
  return (
    <div >
       <Header/>
       <PopularRecepies/>
       <AbourUsSection />
       <SectionPost />
       <DownloadSection />
       <Footer />
    </div>
  )
}

export default Home;