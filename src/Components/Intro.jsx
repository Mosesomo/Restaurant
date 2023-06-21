import meal from '../assets/meal.mp4'

const Intro = () => {
  return (
    <div className='w-[100%] p-6'>
      <video controls>
        <source src={meal} type='video/mp4' />
      </video>  
    </div>
  )
}

export default Intro