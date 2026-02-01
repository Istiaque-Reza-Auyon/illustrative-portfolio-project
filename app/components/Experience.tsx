import React, { forwardRef } from 'react'
import { ExperienceCard } from './ExperienceCard'
import { experienceData } from '../experience'

type Props = {
}

const Experience = forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
  return (
    <section ref={ref} className='w-full h-auto p-4 bg-black'>
      <h1 className="text-3xl lg:text-5xl py-10 text-center">My <span className='font-bold'>Experience</span></h1>
        {experienceData.map((exp, index) => (
            <ExperienceCard 
                key={index}
                position={exp.position}
                company={exp.company}
                startDate={exp.startDate}
                endDate={exp.endDate}
                responsibilities={exp.responsibilities}
                companyLogo={exp.companyLogo} 
            />
        ))}
    </section>
  )
})

export default Experience