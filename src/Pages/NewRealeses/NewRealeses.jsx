import './newRealeses.css'
import NavBar from "../../components/atoms/NavBar/NavBar"
import Footer from "../../components/atoms/footer/Footer"
import LpCard from '../../components/atoms/LpCard/LpCard'

function NewRealeses() {
  
  return (
    <div>
        <NavBar/>
        <div className="flex justify-between">
            <h3 className="ml-1.5 mt-3">NEW REALESES</h3>
            <h5 className="NrSubtitle">VIEW ALL</h5>
        </div>
        
        <div className='flex flex-row gap-2 flew-wrap mt-5'>
            <LpCard />
            
        </div>
        
        <Footer/>
    </div>
  )
}

export default NewRealeses