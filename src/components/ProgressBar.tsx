import { useEffect, useState } from 'react'

function ProgressBar() {
    const [scrollTop, setScroollTop] = useState<unknown>();
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        const scrolled = (winScroll / height) * 100;

        setScroollTop(scrolled)
    }
    return (
        <div className='
    w-1.5 bg-gray-200 fixed
    ml-[-5px] mt-[90px] h-full
    mb-4'>
            <div className='bg-gradient-to-t from-yellow-600 to-yellow-400 transition-all ease-out duration-1000' style={{ height: `${scrollTop}%` }}>

            </div>
        </div>
    )
}

export default ProgressBar
