import './home.css'
import recordPlayerLogo from '../../assets/images/recordPlayerLogo.jpg'

function Home() {
  return (
    <div className='mainContainer'>
        <img className='mainLogo' src={recordPlayerLogo} alt="Logo" />
        <h1 className='mainTitle'>SoundScore</h1>
        <a href="http://"><button className='btnFirst'>Get Started</button></a>
    </div>
  )
}

export default Home