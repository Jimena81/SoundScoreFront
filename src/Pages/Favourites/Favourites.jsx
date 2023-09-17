import NavBar from "../../components/atoms/NavBar/NavBar"
import FavouriteList from "../../components/atoms/FavouriteList/FavouriteList"
import Footer from "../../components/atoms/footer/Footer"


function Favourites() {
  return (
    <div>
        <NavBar/>
       <FavouriteList/>
        <Footer/>
    </div>
  )
}

export default Favourites