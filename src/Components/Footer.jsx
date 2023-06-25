import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter  } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-[100%] p-11 font-[italic]'>
        <div className='w-[100%] flex justify-center items-center'>
          <div className='border-[1px] border-yellow-100 px-8 p-4'>
            <div className='w-100 items-center mb-4 flex flex-col justify-center'>
              <h4 className=''>Newsletter</h4>
              <img className='' src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt=""></img>
            </div>
            <h1 className='text-center text-4xl font-semibold text-yellow-200'>Subscribe To Our Newsletter</h1>
            <p className='text-center'>And Never Miss Latest Updtes</p>
            <div className='w-[100%] flex justify-start items-center gap-5 mt-6'>
              <div className='w-[100%]'>
                <input className='bg-transparent border-[1px] p-1 px-3 rounded-md w-[100%]' type="email" placeholder="Enter you e-mail address" required />
              </div>
              <div className='w-[100%]'>
                <button type='submit' className='bg-white p-1 px-3 rounded-sm hover:bg-yellow-200 hover:scale-105 ease-in-out duration-300 text-black'>subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] mt-7  lg:px-28 lg:flex justify-between items-center'>
          <div  className='w-[100%] mb-8'>
            <h2 className='text-center text-2xl mb-6'>Contact Us</h2>
            <p className='text-center'>9 W 53rd st. New York, Ny 10019,</p>
            <p className='text-center'>+1 234 455 345</p>
            <p className='text-center'>+254 789 345 098</p>
          </div>
          <div className='w-[100%] mb-3'>
            <h1 className='text-center text-4xl mb-6 uppercase'>Restaurant</h1>
            <p className='text-center'>The Best way To Find Yourself Is To Lose Yourself In</p>
            <p className='text-center'>Service of Others</p>
            <img className='mb-3' src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt=""></img>
            <div className='w-[100%] flex justify-center items-center gap-5'>
              <div>
                <AiOutlineInstagram size={25}/>
              </div>
              <div>
                <AiOutlineFacebook size={25}/>
              </div>
              <div>
                <AiOutlineTwitter size={25}/>
              </div>
            </div>
          </div>
          <div className='w-[100%] mt-10 mb-5'>
            <h2 className='text-center mb-6 text-2xl'>Working Hours</h2>
            <p className='text-center'>Mon - Fri:</p>
            <p className='text-center mb-5'>08:00 Am - 12:00 Am</p>
            <p className='text-center'>Sat - Sun:</p>
            <p className='text-center'>07:00 Am - 11:00 Pm</p>
          </div>
        </div>
        <p className='text-center py-10'>2023 Restuarant. All Rights Reserved.</p>
    </div>
  )
}

export default Footer