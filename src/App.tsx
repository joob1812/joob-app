import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Link, Routes, Route } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import SideBar from './components/SideBar';
import Skills from './components/Skills';

import { Dialog } from '@headlessui/react'



function App() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const [darkMode, setDarkMode] = useState(false);

  const menu = [
    {
      id: 1,
      name: "ACCUEIL",
      url: "/"
    },
    {
      id: 2,
      name: "A PROPOS",
      url: "/About"
    },
    {
      id: 3,
      name: "COMPETENCES",
      url: "/Skills"
    },
    {
      id: 4,
      name: "PROJETS",
      url: "/Projects"
    },
    {
      id: 5,
      name: "CONTACT",
      url: "/Contact"
    },
  ];
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='dark:bg-gray-900'>
        <header className="flex items-center fixed
        w-full justify-between 
        border-b-[1px] bg-white dark:bg-gray-900">
          <div className='w-[90px] h-[90px] bg-gradient-to-t from-gray-500 to-gray-900'>
            <a href="/"><img src="./public/Logo_SC.png"
              alt="Le logo de JoOb" className='p-2' /></a>
          </div>
          <div className='hidden lg:flex lg:gap-x-14 '>
            {menu.map((item) => (
              <div className='cursor-pointer
              text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200 hover:underline transition-all'>
                <Link to={item.url}>{item.name}</Link>
              </div>
            ))}
          </div>

          <div className='w-[90px] h-[90px] 
                bg-white flex justify-center items-center dark:bg-gray-900'
          >
            <BsFillMoonStarsFill className='lg:block hidden
                hover:scale-110 transition-all
                w-8 h-8 text-gray-800 cursor-pointer  dark:text-gray-100'
              onClick={() => setDarkMode(!darkMode)} />
            <AiOutlineMenu onClick={() => setMobileMenuOpen(true)} className='w-[30px] h-[30px] dark:text-gray-100 cursor-pointer lg:hidden ' />
            <span className="sr-only">Open main menu</span>
          </div>

          <Dialog as="div" className={`lg:hidden ${darkMode ? "dark" : ""}`} open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed border-l- dark:border-gray-100/50 bg-white inset-y-0 right-0 z-50 w-full overflow-y-auto  dark:bg-gray-900 dark:text-gray-100  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between ">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">JoOb Company</span>
                  <img
                    className="h-8 w-auto"
                    src="./public/Logo_SC.png"
                    alt="Le logo de JoOb"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <AiOutlineClose className="h-8 w-12" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root ">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {menu.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <SideBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
