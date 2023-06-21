

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-[100%] bg-black p-7">
      <div className="w-[100%]">
        <h1 className="text-4xl font-[italic] font-bold">Restaurant</h1>
      </div>
      <div className="w-[100%]">
        <ul className="flex justify-center items-center gap-5 w-[100%]">
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">Home</li>
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">Menu</li>
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">About</li>
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">Awards</li>
          <li className="cursor-pointer hover:text-yellow-300 hover:transition all duration-150">Contacts</li>
        </ul>
      </div>
      <div className="flex justify-end items-center gap-5 w-[100%]">
        <div>
          <h3 className="cursor-pointer font-bold">Login/Register</h3>
        </div>
        <div className="border-[1px] p-1 rounded-md cursor-pointer hover:bg-yellow-400">
          <h2>Book Table</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar