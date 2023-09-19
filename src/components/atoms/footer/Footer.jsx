import './footer.css';
import home from "../../../assets/images/home.png";
import like from "../../../assets/images/like.png";
import chat from "../../../assets/images/chat.png";


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <a href='/NewReleases' className="f_link">
          <div className="f_menu_item">
            <img className="f_icon" src={home} alt="" />
            <p className="f_icon_text text-white">Home</p>
          </div>
        </a>
        <a href='/Favourites'>
        <div className="f_menu_item">
            <img className="f_icon" src={like} alt="" />
            <p className="f_icon_text text-white">Favorites</p>
          </div>
        </a>
        <a href='/AllReviews'>
          <div className="f_menu_item">
            <img className="f_icon" src={chat} alt="" />
            <p className="f_icon_text text-white">Reviews</p>
          </div>
        </a>
       
          
        
      </footer>
    </>
  );

}
export default Footer;