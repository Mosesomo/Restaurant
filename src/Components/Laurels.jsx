import award01 from '../assets/award01.png'
import award02 from '../assets/award02.png'
import award03 from '../assets/award03.png'
import award05 from '../assets/award05.png'
import laurels from '../assets/laurels.png'

const Laurels = () => {
  return (
    <div className='w-[100%] p-10 mt-8 flex justify-between items-center'>
      <div className='w-[100%]'>
        <h4 className='text-xl font-[italic] font-semibold'>Awards & Recognition</h4>
        <img className='mb-4' src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt=""></img>
        <h2 className='text-5xl text-yellow-200 font-[italic] font-semibold mb-8'>Our Laurels</h2>
        <div className='q-[100%] flex justify-start items-start'>
          <div className='w-[100%]'>
            <div className='w-[100%] mb-7 flex justify-start items-center gap-10'>
              <div className=''>
                <img className='w-[150px] object-cover' src={award01} alt=""></img>
              </div>
              <div className=''>
                <h3 className='text-xl font-[italic] font-medium text-yellow-200'>Bib Gourmond</h3>
                <p>Best Restaurant in the World</p>
              </div>
            </div>
            <div className='w-[100%] mb-7 flex justify-start items-center gap-10'>
              <div>
                <img className='w-[150px] object-cover' src={award02} alt=""></img>
              </div>
              <div className=''>
                <h3 className='text-xl font-[italic] font-medium text-yellow-200'>Rising Star</h3>
                <p>Best Restaurant in the World</p>
              </div>
            </div>
            <div className='w-[100%] mb- flex justify-start items-center gap-10'>
              <div>
                <img className='w-[150px] object-cover' src={award05} alt=""></img>
              </div>
              <div className=''>
                <h3 className='text-xl font-[italic] font-medium text-yellow-200'>AA Hospitality</h3>
                <p>Best Restaurant in the World</p>
              </div>
            </div>
            <div className='w-[100%] mb-7 flex justify-start items-center gap-10'>
              <div>
                <img className='w-[150px] object-cover' src={award03} alt=""></img>
              </div>
              <div className=''>
                <h3 className='text-xl font-[italic] font-medium text-yellow-200'>Outstanding chef</h3>
                <p>Best Restaurant in the World</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%]'>
          <img className='w-[100%] object-cover' src={laurels} alt=''></img>
        </div>
    </div>
  )
}

export default Laurels