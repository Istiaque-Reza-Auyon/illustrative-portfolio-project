import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Mail } from 'lucide-react';

import Image from "next/image";
import boy from "../../public/boy.svg"
import boyAlt from "../../public/boyAlt.svg"

type Props = {}

function About({ }: Props) {
  return (
    <div className='flex flex-col items-start lg:flex-row-reverse lg:justify-around px-5 py-10'>
      {/* Mobile version: Visible by default, hidden on Large screens */}
      <div className="lg:hidden py-5 w-full h-auto object-cover">
        <Image src={boyAlt} alt="boy alternative" priority className='w-full h-auto object-cover' />
      </div>

      {/* Desktop version: Hidden by default, visible on Large screens */}
      <div className="hidden lg:block py-5 lg:w-max-[50vw]">
        <Image src={boy} alt="boy" priority className=' h-auto' />
      </div>
      <div className='flex flex-col justify-center items-start lg:w-min-[50vw] lg:max-w-[50vw] h-auto'>
        <div className="font-sans text--100 lg:text-base leading-tight lg:leading-normal tracking-normal lg:tracking-tight text-gray-900">
          <div className='leading-tight'>
            Hello I'm <span className="font-bold">Istiaque Reza Auyon.</span>
            <br />
          </div>
          <div className='leading-tight'>
            <span className="font-bold">Full-Stack </span>
            <span className="font-bold text-transparent stroke-1 lg:stroke-0">
              Web Developer
            </span>
            <br />
          </div>
          <div>
            Based In <span className="font-bold">Bangladesh.</span>

          </div>
        </div>
        <div className='text-zinc-500 py-5 text--200 text-justify' style={{ textJustify: 'inter-word' }}>
          I'm Istiaque Reza Auyon Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
        </div>
        <div className='flex w-full justify-center'>
          <div className='flex flex-wrap gap-20 p-10'>
            <Github color='black' size={35} />
            <Linkedin color='black' size={35} />
            <Twitter color='black' size={35} />
            <Mail color='black' size={35} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About