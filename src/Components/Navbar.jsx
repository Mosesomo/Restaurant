import { useState } from "react"
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex justify-between items-center w-[100%] bg-black p-4 lg:p-7">
      <div className="w-[100%]">
        <h1 className="text-4xl font-[italic] font-bold">Restaurant</h1>
      </div>
      {/*laptop links*/}
      <div className="w-[100%]">
        <ul className="hidden lg:flex justify-center items-center gap-5 w-[100%]">
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
            <a href="#">Menu</a>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
            <a href="#">About</a>
          </li>
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
            <a href="#">Awards</a>  
          </li>
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>

      {/*mobile links*/}
       {isOpen && (
         <div className="lg:hidden absolute top-[80px] right-0 w-[250px] h-[350px] bg-black/95 z-[900]">
          <div className="flex justify-end pr-6">
            <AiOutlineClose size={25} onClick={() => setIsOpen(false)} />
          </div>
          <ul className="lg:flex justify-start items-start p-4">
            <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
              <a href="#">Home</a>
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
              <a href="#">Menu</a>
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
              <a href="#">About</a>
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
              <a href="#">Awards</a>  
            </li>
            <li onClick={() => setIsOpen(false)} className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">
              <a href="#">Contacts</a>
            </li>
          </ul>
         <div className="lg:hidden block absolute bottom-4 p-4">
         <h3 onClick={() => setIsOpen(false)} className="cursor-pointer font-bold">Login/Register</h3>
        </div>
     </div>
    )}
    <div className="flex justify-end items-center gap-5 w-[100%]">
       <div className="hidden lg:block">
         <h3 className="cursor-pointer font-bold">Login/Register</h3>
        </div>
        <div className="border-[1px] p-1 rounded-sm cursor-pointer hover:bg-yellow-400 hover:scale-105 ease-in-out duration-300 ">
          <button>Book Table</button>
        </div>
      </div>
      <div>
        <AiOutlineBars size={30} className="lg:hidden ml-3 mr-0" onClick={() => setIsOpen(true)}/>
      </div>
    </div>
  )
}

export default Navbar