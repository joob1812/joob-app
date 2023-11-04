import {
    IoLogoGithub, IoLogoYoutube, IoLogoLinkedin,
    IoLogoFacebook
} from "react-icons/io5";

function SideBar() {
  return (
    <div
    className='w-[90px] border-r-[1px]
    h-screen fixed flex flex-col mt-[90px]
    justify-around items-center bg-white dark:bg-gray-900 dark:text-gray-200'
    >
        <h2 className='-rotate-90 tracking-widest font-semibold'>HOMEPAGE</h2>
        <div className='flex flex-col gap-7 mb-10 text-[20px]'>
            <IoLogoGithub className='cursor-pointer hover:scale-110 transition-all'/>      
            <IoLogoYoutube className='cursor-pointer hover:scale-110 transition-all'/>      
            <IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all'/>      
            <IoLogoFacebook className='cursor-pointer hover:scale-110 transition-all'/>      
        </div>
          </div>
  )
}

export default SideBar
