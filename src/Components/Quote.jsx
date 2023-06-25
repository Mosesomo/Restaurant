import  chef  from '../assets/chef.png'
import quote from '../assets/quote.png'
import sign from '../assets/sign.png'

const Quote = () => {
  return (
    <div className='w-[100%] p-8 mt-8'>
      <div className='w-[100%] lg:flex justify-between'>
        <div className='w-[100%] p-5'>
          <img className='w-[100%] object-cover' src={chef} alt=""></img>
        </div>
        <div className='w-[100%] p-7'>
          <h4 className='font-[italic] text-xl font-semibold'>Chefs Word</h4>
          <img className='mb-5' src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt="" />
          <h2 className='text-5xl font-bold font-[italic] text-yellow-300'>What We Believe In</h2>
          <div className='w-[100%] flex justify-center mt-11 mb-9'>
            <div className=''>
              <img src={quote} alt="" />
            </div>
            <div className=''>
              <p className='font-[italic]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore enim sit labore quibusdam error, iste esse deserunt sunt nam corporis voluptas quo aliquam placeat ratione perspiciatis fuga! Sint, aspernatur quo?</p>
            </div>
          </div>
          <h4 className='mb-4 text-xl text-yellow-200 font-[italic]'>Kevin Luo</h4>
          <h3 className='text-2xl font-[italic] font-bold mb-7'>Chef & Founder</h3>
          <img src={sign} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Quote