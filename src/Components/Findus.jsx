import findus from '../assets/findus.png'

const Findus = () => {
  return (
    <div className='w-[100%] lg:flex justify-between items-center p-9'>
      <div className='w-[100%] mb-7'>
        <h4 className='text-xl font-[italic] font-semobold'>Contact</h4>
        <img className='mb-6' src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt="" />
        <h1 className='text-5xl text-yellow-200 font-[italic] font-bold mb-8'>Find Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint tempora quae</p>
        <h3 className='mt-5 font-[italic] font-semibold text-yellow-100 text-xl mb-4'>Opening Hours</h3>
        <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        <button className='mt-6 bg-white text-black font-[italic] font-bold p-3 rounded-md hover:bg-yellow-200 hover:scale-105 ease-in-out duration-300'>Visit Us</button>
      </div>
      <div className='w-[100%]'>
        <img className='w-[100%] object-cover' src={findus} alt=''></img>
      </div>
    </div>
  )
}

export default Findus