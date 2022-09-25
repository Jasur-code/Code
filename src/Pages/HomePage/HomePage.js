import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Section1 from '../../Components/Section1/Section1'
import Section2 from '../../Components/Section2/Section2'
import Section3 from '../../Components/Section3/Section3'
import Section4 from '../../Components/Section4/Section4'
import Section5 from '../../Components/Section5/Section5'
import Section6 from '../../Components/Section6/Section6'
import Section7 from '../../Components/Section7/Section7'

export default function HomePage() {
  return (
    <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Footer/>
    </div>
  )
}
