import Strings from '../shared/Strings'
import { IoArrowForwardOutline } from 'react-icons/io5'
import Logo_SC from '/Logo_SC.png';

function Services() {
    // const servicesList = [
    //     {
    //         id: 1,
    //         title: Strings.FRONTEND,
    //         desc: Strings.FRONTEND_DESC,
    //         logo: '/Logo_SC.png',
    //     },
    //     {
    //         id: 2,
    //         title: Strings.FRONTEND,
    //         desc: Strings.FRONTEND_DESC,
    //         logo: '/Logo_SC.png',
    //     },
    //     {
    //         id: 3,
    //         title: Strings.FRONTEND,
    //         desc: Strings.FRONTEND_DESC,
    //         logo: '/Logo_SC.png',
    //     },
    // ]
    return (
        <div className='px-12 mt-12'>
            <div className='flex items-center'>
                <div className='w-[20px] h-[7px] bg-teal-600 rounded-full'></div>
                <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                <h2 className='text-[24px]  dark:text-gray-200 font-bold'>{Strings.SERVICES}</h2>
                <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                <div className='w-[20px] h-[7px] bg-teal-600 rounded-full'></div>
            </div>
            <div className='md:flex gap-10'>
                <div className='
                text-center flex flex-col
                justify-center items-center
                rounded-xl shadow-lg my-10 p-10 bg-teal-00'>
                    <img src={Logo_SC} className='
                    w-[90px] h-[90px] p-3 hover:scale-110
                    transition-all cursor-pointer' />
                    <h3 className='text-lg font-medium pt-8 pb-2  dark:text-gray-200'>
                        Beautiful Designs
                    </h3>
                    <p className='py-2  dark:text-gray-200'>Rendre votre presence en ligne plus conviviale et plus agréable que jamais.
                    </p>
                    <h4 className='py-4 text-teal-400'>Outils de design que j'utilise</h4>
                    <p className='py-1 text-gray-800  dark:text-gray-200'>Illustrator</p>
                    <p className='py-1 text-gray-800  dark:text-gray-200'>Adobe xd</p>
                    <p className='py-1 text-gray-800  dark:text-gray-200'>PowerPoint</p>
                    <IoArrowForwardOutline className='
                     bg-teal-300 text-[35px] p-2 text-white  dark:text-gray-900
                     rounded-full cursor-pointer hover:scale-110
                     transition-all mt-4'/>
                </div>
                <div className='text-center flex flex-col justify-center items-center rounded-xl shadow-lg my-10 p-10'>
                    <img src={Logo_SC} className='
                    w-[90px] h-[90px] p-3 hover:scale-110
                    transition-all cursor-pointer' />
                    <h3 className='text-lg font-medium pt-8 pb-2  dark:text-gray-200'>
                        Beautiful Designs
                    </h3>
                    <p className='py-2  dark:text-gray-200'>Rendre votre presence en ligne plus conviviale et plus agréable que jamais.
                    </p>
                    <h4 className='py-4 text-teal-400'>Outils de design que j'utilise</h4>
                    <p className='py-1 text-gray-800  dark:text-gray-200'>Illustrator</p>
                    <p className='py-1 text-gray-800  dark:text-gray-200'>Adobe xd</p>
                    <p className='py-1 text-gray-800  dark:text-gray-200'>PowerPoint</p>
                    <IoArrowForwardOutline className='
                     bg-teal-300 text-[35px] p-2 text-white  dark:text-gray-900
                     rounded-full cursor-pointer hover:scale-110
                     transition-all mt-4'/>
                </div>
            </div>
            {/* <div className='flex justify-around mt-16'>
                {servicesList.map((items) => (
                    <div className='text-center flex flex-col justify-center items-center gap-4 rounded-xl shadow-lg'>
                        <div className='bg-gray-300 rounded-full w-[60px] h-[60px]'>
                            <img src={Logo_SC}
                                className='w-[60px] h-[60px] p-3
                                hover:scale-110 transition-all cursor-pointer' />
                        </div>
                        <h2 className='mt-5 font-bold'>{items.title}</h2>
                        <h2 className='text-gray-$00'>{items.desc}</h2>
                        <IoArrowForwardOutline className='
                        bg-teal-300 text-[35px] p-2 text-white rounded-full
                        cursor-pointer hover:scale-110 transition-all mb-4'/>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Services
