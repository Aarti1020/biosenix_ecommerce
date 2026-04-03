import BFR from '@/Ui/BFR'
import ImageSection from '@/Ui/ImageSection'
import HeroPart2 from '@/Ui/WhyUs/HeroPart2'
import HeroSection from '@/Ui/WhyUs/HeroSection'
import TrustedSection from '@/Ui/WhyUs/TrustedSection'
import React from 'react'

const WhyUs = () => {
  return (
   <div className="h-auto flex items-center justify-center">
  <div className=' flex flex-col rounded-3xl  h-auto w-full mb-4'>
    <ImageSection title={'Why Us'}/>
  <HeroSection/>

  <hr className='w-[95%] text-center'/>
  <BFR/>
    <hr className='w-[95%] text-center'/>
  <TrustedSection/>
  </div>
</div>

  )
}

export default WhyUs
