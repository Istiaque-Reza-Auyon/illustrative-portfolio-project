import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Mail } from 'lucide-react';

import Image from "next/image";
import boy from "../../public/boy.svg"

type Props = {}

function About({ }: Props) {
  return (
    <div className='flex '>
      <div className='max-w-[50vw]'>
        <div className="font-sans text-5xl md:text-6xl leading-tight tracking-tight text-gray-900">
          <div>
            Hello I'm <span className="font-bold">Istiaque Reza Auyon.</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold">Full-stack</span>
            <span className="font-bold text-transparent" style={{ WebkitTextStroke: "2px #111827" }}>
              Developer
            </span>
          </div>

          <div>
            Based In <span class="font-bold">Bangladesh.</span>
          </div>
        </div>
        <div>
          I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
        </div>
        <Github color='black' />
        <Linkedin color='black' />
        <Twitter color='black' />
        <Mail color='black' />
      </div>
      <div>
        <Image
          src={boy}
          alt="boy"
          className="h-full"
        />
      </div>

    </div>
  )
}

export default About