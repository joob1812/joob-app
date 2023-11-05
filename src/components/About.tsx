import Strings from '../shared/Strings'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import ProfilePic from './ProfilePic'
import ProgressBar from './ProgressBar'
import Logo_SC from '/Logo_SC.png'

function About() {
    return (
        <div className='ml-[90px] grid grid-cols-1 lg:grid-cols-3'>
            <div className='col-span-2 mt-[90px] '>
                <div className='px-44 text-center flex flex-col items-center'>
                    <div className='h-[120px] border-r-[1px]' />
                    <div className='w-[5px] h-[5px] bg-yellow-300 rounded-full'></div>
                    <h2 className='text-[44px]  dark:text-gray-200 font-bold'>{Strings.ABOUT_HEADING}</h2>
                    <BiSolidQuoteAltLeft className='bg-yellow-300 p-3 text-[44px] rounded-full mt-6 text-white  dark:text-gray-900' />
                    <h2 className='my-5 text-gray-500  dark:text-gray-300 text-[14px] md:text-[14px]'>{Strings.ABOUT_DESC}</h2>
                    <BiSolidQuoteAltRight className='bg-yellow-300 p-3 text-[44px] rounded-full mt-6 text-white  dark:text-gray-900' />
                </div>
                <div className='px-12 mt-12'>
                    <div className='flex items-center'>
                        <div className='w-[20px] h-[7px] bg-yellow-600 rounded-full'></div>
                        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                        <h2 className='text-[24px]  dark:text-gray-200 font-bold'>{Strings.FORMATION}</h2>
                        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                        <div className='w-[20px] h-[7px] bg-yellow-600 rounded-full'></div>
                    </div>
                    <div className='lg:flex lg:flex-col md:justify-center px-24'>
                        <div className='
                text-center flex flex-col
                justify-center items-center
                rounded-xl shadow-lg shadow-yellow-200 my-5 p-10 bg-yellow-50 dark:shadow-none dark:bg-yellow-300/70'>
                            <img src={Logo_SC} className='
                    w-[90px] h-[90px] p-3 hover:scale-110
                    transition-all cursor-pointer' />
                            <h3 className='text-lg font-medium pt-8 pb-2  dark:text-gray-900'>{Strings.ETAB1}</h3>
                            <p className='py-2  text-yellow-600 dark:text-yellow-900'>{Strings.AN1}
                            </p>
                            <p className='py-1 text-yellow-900  dark:text-yellow-950'>{Strings.DIPLOME1}</p>
                        </div>
                        <div className='
                text-center flex flex-col
                justify-center items-center
                rounded-xl shadow-lg shadow-yellow-200 my-5 p-10 bg-yellow-50 dark:shadow-none dark:bg-yellow-300'>
                            <img src={Logo_SC} className='
                    w-[90px] h-[90px] p-3 hover:scale-110
                    transition-all cursor-pointer' />
                            <h3 className='text-lg font-medium pt-8 pb-2  dark:text-gray-900'>{Strings.ETAB2}</h3>
                            <p className='py-2  text-yellow-600 dark:text-yellow-900'>{Strings.AN2}
                            </p>
                            <p className='py-1 text-yellow-900  dark:text-yellow-950'>{Strings.DIPLOME2}</p>
                        </div>
                        <div className='
                text-center flex flex-col
                justify-center items-center
                rounded-xl shadow-lg shadow-yellow-200 my-5 p-10 bg-yellow-50 dark:shadow-none dark:bg-yellow-300'>
                            <img src={Logo_SC} className='
                    w-[90px] h-[90px] p-3 hover:scale-110
                    transition-all cursor-pointer' />
                            <h3 className='text-lg font-medium pt-8 pb-2  dark:text-gray-900'>{Strings.ETAB3}</h3>
                            <p className='py-2  text-yellow-600 dark:text-yellow-900'>{Strings.AN3}
                            </p>
                            <p className='py-1 text-yellow-900  dark:text-yellow-950'>{Strings.DIPLOME3}</p>
                        </div>
                        <div className='
                text-center flex flex-col
                justify-center items-center
                rounded-xl shadow-lg shadow-yellow-200 my-5 p-10 bg-yellow-50 dark:shadow-none dark:bg-yellow-300'>
                            <img src={Logo_SC} className='
                    w-[90px] h-[90px] p-3 hover:scale-110
                    transition-all cursor-pointer' />
                            <h3 className='text-lg font-medium pt-8 pb-2  dark:text-gray-900'>{Strings.ETAB4}</h3>
                            <p className='py-2  text-yellow-600 dark:text-yellow-900'>{Strings.AN4}
                            </p>
                            <p className='py-1 text-yellow-900  dark:text-yellow-950'>{Strings.DIPLOME4}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block'>
                <ProgressBar />
                <ProfilePic />
            </div>
        </div>
    )
}

export default About

