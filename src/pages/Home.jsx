import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import PopularRecepies from '../components/PopularRecepies';
import AbourUsSection from '../components/AbourUsSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div >
       <Header/>
       <PopularRecepies/>
       <AbourUsSection />
       <DownloadSection />
       <Footer />
    </div>
  )
}

export default Home;