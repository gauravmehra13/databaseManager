import React from 'react'
import DataTable from '../components/DataTable'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const LandingPage = ({styleMode,toggleMode}) => {
  return (
    <div>
      <HeroSection/>
      <DataTable  styleMode={styleMode} toggleMode={toggleMode}/>
      {/* <Footer/> */}
    </div>
  )
}

export default LandingPage
