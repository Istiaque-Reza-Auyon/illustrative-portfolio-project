import Image, { StaticImageData } from "next/image";


interface ExperienceCardProps {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string;
    companyLogo: StaticImageData;
}

export const ExperienceCard = ({ position, company, startDate, endDate, responsibilities, companyLogo }: ExperienceCardProps) => {
    return (
        <div className="flex flex-col border-2 p-4 my-4 gap-8 rounded-lg border-[#54545c]">
            <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
                <div className="flex gap-2 items-center">
                    <Image src={companyLogo} alt={`${company} logo`} className="h-10 w-10 rounded-full lg:h-12 lg:w-12" />
                    <div className="text-white text-lg font-semibold lg:text-lg">
                        {position} At {company}
                    </div>
                </div>
                <div>
                    <div className="text-[#9f9fa1]">
                        {startDate} to {endDate}
                    </div>
                </div>
            </div>
            <div className="text-[#9f9fa1]">{responsibilities}</div>
        </div>
    );
};