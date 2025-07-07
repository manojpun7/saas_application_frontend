import { useAppSelector } from '@/lib/store/hook'
import React from 'react'

const About = () => {

    const data = useAppSelector((store)=>store.studentSlice)
  return (
    <div>
      
    </div>
  )
}

export default About
