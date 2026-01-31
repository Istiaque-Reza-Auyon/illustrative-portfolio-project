import React, { forwardRef } from 'react'
import { ExperienceCard } from './ExperienceCard'
import bini from '../../public/bini.jpg'

type Props = {
}

const Experience = forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
  return (
    <section ref={ref} className='w-full h-auto p-4 bg-black'>
        <ExperienceCard 
            position="Software Engineer" 
            company="Tech Corp" 
            startDate="Jan 2020" 
            endDate="Dec 2022" 
            responsibilities="Developed and maintained web applications using React and Node.js." 
            companyLogo={bini} 
        />
    </section>
  )
})

export default Experience