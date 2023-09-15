import './newRealeses.css'
import NavBar from "../../components/atoms/NavBar/NavBar"
import Footer from "../../components/atoms/footer/Footer"
import LpCard from '../../components/atoms/LpCard/LpCard'

function NewRealeses() {
  return (
    <div>
        <NavBar/>
        <div className="flex justify-between">
            <h3 className="ml-1.5 mt-6">NEW REALESES</h3>
            <h5 className="NrSubtitle mr-2 mt-6">VIEW ALL</h5>
        </div>
        
        <div className='flex flex-row gap-2 flew-wrap'>
            <LpCard/>
            <LpCard/>
            <LpCard/>
            <LpCard/>
        </div>
        <Footer/>
    </div>
  )
}

export default NewRealeses