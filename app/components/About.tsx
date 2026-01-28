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
    <div className='flex flex-col items-center lg:flex-row-reverse lg:items-start px-5 py-10'>
      <div className='w-full'>
        {/* Mobile version: Visible by default, hidden on Large screens */}
        <div className="lg:hidden">
          <Image src={boyAlt} alt="boy alternative" priority className='w-full h-auto' />
        </div>

        {/* Desktop version: Hidden by default, visible on Large screens */}
        <div className="hidden lg:block">
          <Image src={boy} alt="boy" priority className='w-full h-auto object-cover' />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-[50vw] p-20'>
        <div className="font-sans text-5xl md:text-6xl leading-tight tracking-tight text-gray-900">
          <div className="font-sans text-5xl md:text-6xl leading-tight tracking-tight text-gray-900">
            <div>
              Hello I'm <span className="font-bold">Istiaque Reza Auyon.</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold">Full-stack </span>
              <span className="font-bold text-transparent" style={{ WebkitTextStroke: '2px #111827' }}>
                Developer
              </span>
            </div>

            <div>
              Based In <span className="font-bold">Bangladesh.</span>
            </div>
          </div>
        </div>
        <div className='text-zinc-500 py-20 text-center max-w-[35vw]'>
          I'm Istiaque Reza Auyon Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
        </div>
        <div className='flex gap-20'>
          <Github color='black' size={35} />
          <Linkedin color='black' size={35} />
          <Twitter color='black' size={35} />
          <Mail color='black' size={35} />
        </div>
      </div>
    </div>
  )
}

export default About