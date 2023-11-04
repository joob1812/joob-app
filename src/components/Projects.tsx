
function Projects() {
  return (
    <div className='dark:bg-gray-900'>
      <div className='h-screen flex justify-center flex-col items-center'>
        <div className='h-[120px] border-r-[1px] mt-[30px]' />
        <div className='w-[5px] h-[5px] bg-yellow-300 rounded-full'></div>
        <h2 className='mt-4 text-gray-800 font-medium text-[13px]   dark:text-gray-200'> Salaam! Je m'appelle</h2>
        <h2 className='mt-4 text-[50px] text-center text-yellow-600  dark:text-yellow-500 font-bold tracking-widest'>PAPE MOUSSA <br></br>DIOP</h2>
        <img src="/Avatar_2.jpg" alt="Avatar Pic"
          className='w-[150px] h-[150p] bg-yellow-300 p-3 rounded-full shadow-lg mt-6' />
        <h2 className='mt-4 text-gray-800 font-medium text-[13px]
                 dark:text-gray-200'
        ><span className='dark:text-yellow-300 text-yellow-600'>''</span> Développeur Front-End <span className='dark:text-yellow-300 text-yellow-600'>& </span>UI/UX Designer <span className='dark:text-yellow-300 text-yellow-600'>& </span> Infographe <span className='dark:text-yellow-300 text-yellow-600'>& </span> Déssinateur <span className='dark:text-yellow-300 text-yellow-600'>''</span></h2>
      </div>
    </div>
  )
}


export default Projects
