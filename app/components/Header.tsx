import Image from 'next/image';
import logo from '../../public/logo.svg';
import download from '../../public/download.svg';

type Props = {}

function Header({ }: Props) {
    return (
        <div className='flex justify-around items-center py-10 w-full'>
            <div className='flex'>
                <Image
                    src={logo}
                    alt="Logo"
                    className="h-full"
                />
                <div className='w-full text-black text-3xl font-bold flex items-center px-2'>
                    PORTFOLIO WEBSITE
                </div>
            </div>
            <div className='flex gap-18 h-fit'>
                <button className=' text-black text-2xl font-bold flex items-center'>
                    About Me
                </button>
                <button className=' text-black text-2xl font-bold flex items-center'>
                    Skills
                </button >
                <button  className=' text-black text-2xl font-bold flex items-center'>
                    Project
                </button >
                <button  className=' text-black text-2xl font-bold flex items-center'>
                    Contact Me
                </button >
            </div>
            <div className='flex justify-center items-center p-4 bg-black'>
                <div className='w-full text-white text-2xl font-bold flex items-center px-2'>
                    Resume
                </div>
                <button>
                    <Image
                    src={download}
                    alt="download"
                    className="h-full"
                />
                </button>
            </div>
        </div>
    )
}

export default Header