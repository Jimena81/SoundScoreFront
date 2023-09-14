/* eslint-disable react/no-unescaped-entities */
import './SuccessRegister.css'
import musicImg from '../../assets/images/music-colour-splash.jpg'

function SuccessRegister() {
  return (
    <div>
      <img src={musicImg} alt="" className='w-full mt-20 mb-16'/> 
      <div className='flex flex-col items-center'>
      <h2 className='sucTitle'>Yeay!  Completed</h2>
      <h4 className='sucSubtitle'>Now you are able to make some reviews or listen some good music</h4>
     
      <a href="/NewReleases"><button className='bg-custome flex justify-center rounded-md mt-5 px-6 py-1.5 text-s leading-6 shadow-sm'>Let's Go</button></a>
      </div>

    </div>
  )
}

export default SuccessRegister