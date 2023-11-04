// // import { Menu } from '@headlessui/react'

// import { BsFillMoonStarsFill } from "react-icons/bs"
// import { Link, Routes, Route } from "react-router-dom"
// import About from "./About"
// import Contact from "./Contact"
// import Home from "./Home"
// import Projects from "./Projects"
// import SideBar from "./SideBar"
// import Skills from "./Skills"
// import { useState } from "react"

// function Header() {
//     const [darkMode, setDarkMode] = useState(false);

//     const menu = [
//         {
//             id: 1,
//             name: "ACCUEIL",
//             url: "/"
//         },
//         {
//             id: 2,
//             name: "A PROPOS",
//             url: "/About"
//         },
//         {
//             id: 3,
//             name: "COMPETENCES",
//             url: "/Skills"
//         },
//         {
//             id: 4,
//             name: "PROJETS",
//             url: "/Projets"
//         },
//         {
//             id: 5,
//             name: "CONTACT",
//             url: "/Contact"
//         },
//     ];
//     return (
//         <div className={darkMode ? "dark" : ""}>
//             <div className='dark:bg-gray-900'>
//                 <div className='flex items-center fixed
//         w-full justify-between 
//         border-b-[1px] bg-white dark:bg-gray-900'>
//                     <div className='w-[90px] h-[90px] bg-gradient-to-t from-gray-500 to-gray-900'>
//                         <img src="./public/Logo_SC.png"
//                             alt="Le logo de JoOb" className='p-2' />
//                     </div>
//                     <div className='hidden md:flex gap-14 dark:text-gray-200'>
//                         {menu.map((item) => (
//                             <div className='cursor-pointer
//               hover:scale-110 transition-all font-bold'>
//                                 {/* <a href="#"><h2>{item.name}</h2></a> */}
//                                 <Link to={item.url}>{item.name}</Link>
//                             </div>
//                         ))}
//                     </div>
//                     <div className='w-[90px] h-[90px] 
//                 bg-white flex justify-center items-center dark:bg-gray-900'
//                     >
//                         <BsFillMoonStarsFill className='
//                 hover:scale-110 transition-all
//                 w-8 h-8 text-gray-800 cursor-pointer  dark:text-gray-200'
//                             onClick={() => setDarkMode(!darkMode)} />
//                         {/* <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-10 h-10 text-white"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//                 </svg> */}
//                     </div>
//                 </div>

//                 <SideBar />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/projects" element={<Projects />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/Skills" element={<Skills />} />
//                 </Routes>
//             </div> 
//         </div>
//     )
// }

// export default Header
