import G from '../assets/G.png'

import knife from '../assets/knife.png';

const About = () => {
  return (
    <div className="w-100%] h-full lg:p-9 mt-10">
      <div className="w-[100%] relative">
        <div className="w-100% flex justify-center items-center">
          <img className="w-[400px] object-cover" src={G} alt="" />
        </div>

        <div className="w-[100%] lg:flex justify-center items-center absolute top-[-18%]">
          <div className="flex justify-center items-center gap-7  w-[100%] p-6">
            <div className="w-[100%]">
              <div className="flex justify-end items-end w-[100%]">
                <h1 className="text-4xl font-bold font-[italic] text-yellow-500">About Us</h1>
              </div>
              <div className="flex justify-end items-end mb-9">
                <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt="" />
              </div>
              <div className="flex justify-end items-end">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in voluptas, id reprehenderit rerum aliquam iste expedita veniam, commodi saepe</p>
              </div>
              <div className="flex justify-end items-end mt-6">
                <button className=" bg-white py-2 px-4 text-black font-semibold hover:bg-yellow-400 hover:scale-105 ease-in-out duration-300">Know More</button>
              </div>
            </div>
            <div className="">
              <img className="" src={knife} alt="" />
            </div>
            <div className="w-[100%]">
              <div className='mb-9'>
                <h1 className="text-4xl font-bold font-[italic] text-yellow-500">Our History</h1>
                <img className='' src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt="" />
              </div>
              <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque sint quis molestias id aliquam? Sint sapiente natus blanditiis dicta fugiat omnis maxime essp</p>
              <button className='bg-white py-2 px-4 text-black font-semibold hover:bg-yellow-400 hover:scale-105 ease-in-out duration-300'>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About