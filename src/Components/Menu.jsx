import { BsDashLg } from 'react-icons/bs'

const Menu = () => {
  return (
    <div className='w-[100%] p-7 bg-black mt-[8em]'>
        <div className='w-100 items-center mb-8 flex flex-col justify-center'>
          <h3 className='text-xl font-bold font-[italic]'>Menu That Fits Your Palatte</h3>
          <img src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/spoon.png?raw=true" alt="" />
        </div>
        <h1 className='text-center text-5xl font-[italic] text-yellow-400 mb-6'>Todays Special</h1>
        <div className='w-[100%] flex justify-between items-center'>
          <div className='w-[100%]'>
            <h2 className='text-center text-4xl font-[italic] mb-4'>Wine & Beer</h2>
            <div className='w-[100%] flex justify-between items-center'>
              <div className='w-[100%]'>
                <div className='mb-4 w-[100%] flex justify-between items-center'>
                  <div className='w-[100%]'>
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Chapel Hill Shiraz</p>
                    <p className='text-gray-400'>AU | Bottle</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$56</p>
                  </div>
                </div>
                <div className='mb-4 w-[100%] flex justify-between items-center'>
                  <div className='w-[100%]'>
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Catena Malbee</p>
                    <p className='text-gray-400'>AU | Bottle</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$56</p>
                  </div>
                </div>
                <div className='mb-4 w-[100%] flex justify-between items-center'>
                  <div className='w-[100%]'>
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>La Viellw Rose</p>
                    <p className='text-gray-400'>FR | 750MI</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$56</p>
                  </div>
                </div>
                <div className='mb-4 w-[100%] flex justify-between items-center'>
                  <div className='w-[100%]'>
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Rhino Pale Ale</p>
                    <p className='text-gray-400'>CA | 750MI</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$56</p>
                  </div>
                </div>
                <div className='mb-4 w-[100%] flex justify-between items-center'>
                  <div className='w-[100%]'>
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Irish Guinnes</p>
                    <p className='text-gray-400'>IE | 750MI</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$56</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[100%]'>
          <img className='w-[100%] object-cover' src="https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/menu.png?raw=true" alt="" />
        </div>
        <div className='w-[100%] px-3'>
            <h2 className='text-center text-4xl font-[italic] mb-4'>Cocktails</h2>
            <div className='w-[100%] flex justify-between items-center'>
              <div className='w-[100%]'>
                <div className='w-[100%] flex justify-between items-center mb-4'>
                  <div className='w-[100%]'>
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Aperol Spirtiz</p>
                    <p className='text-gray-400'>Aperol | Villa Marchersi | soda | 30MI</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$20</p>
                  </div>
                </div>
                <div className='w-[100%] flex justify-between items-center mb-4'>
                  <div className="w-[100%]">
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Dark Stormy</p>
                    <p className='text-gray-400'>Dark Run | Ginger Beer | slice of Lime</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$10</p>
                  </div>
                </div>
                <div className='w-[100%] flex justify-between items-center mb-4'>
                  <div className="w-[100%]">
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Daiquiri</p>
                    <p className='text-gray-400'>FR | 750MI</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$60</p>
                  </div>
                </div>
                <div className='w-[100%] flex justify-between items-center mb-4'>
                  <div className="w-[100%]">
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Old Fashioned</p>
                    <p className='text-gray-400'>Brown Sugar | Bourbon</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$29</p>
                  </div>
                </div>
                <div className='w-[100%] flex justify-between items-center mb-4'>
                  <div className="w-[100%]">
                    <p className='text-xl font-[italic] font-semibold text-yellow-200'>Negroni</p>
                    <p className='text-gray-400'>Gin | Sweet verMouth</p>
                  </div>
                  <div className='w-[100%] flex justify-center items-center'>
                    <BsDashLg size={60} className='text-yellow-200'/>
                    <p>$31</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu