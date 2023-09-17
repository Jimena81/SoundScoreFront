import recordPlayerLogo from '../../../assets/images/recordPlayerLogo.jpg'
import "./navBar.css"

function NavBar() {
  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar la sesión del usuario
    // Esto podría incluir la eliminación de tokens de autenticación, etc.
    console.log("Usuario deslogueado");
  };

  return (
    <div className="navbar">
      <div className="logo w-12">
        <a href="/NewRealeses">
        <img src={recordPlayerLogo} alt="Logo" /></a>
      </div>
      
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default NavBar;
