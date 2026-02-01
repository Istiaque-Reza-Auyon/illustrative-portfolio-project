import { forwardRef } from "react";
import { skillsData } from "../skills";
import Image from "next/image";

interface SkillsProps {
}

const Skills = forwardRef(({ }: SkillsProps,  ref: React.Ref<HTMLDivElement>) => {
    return (
        <section ref={ref} className="bg-white py-10">
            {/* Title stays outside the grid container */}
            <h1 className="text-black text-3xl lg:text-5xl mb-10 text-center">
                My <span className='font-bold'>Skills</span>
            </h1>

            {/* This div handles the responsive grid logic */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-4 px-4">
                {skillsData.map((skill) => (
                    <div key={skill.name} className="flex justify-center items-center p-6 border rounded-lg">
                        <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
});

export default Skills;