import './home.css'
import recordPlayerLogo from '../../assets/images/tocadiscosLogo.png'

function Home() {
  return (
    <div className='mainContainer'>
        <img className='mainLogo' src={recordPlayerLogo} alt="Logo" />
        <h1 className='mainTitle'>SoundScore</h1>
        <a href="/LogIn"><button className='btnFirst'>Get Started</button></a>
    </div>
  )
}

export default Home