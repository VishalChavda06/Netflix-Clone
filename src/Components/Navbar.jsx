import "../CSS/Navbar.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ correct hook

const Navbar = () => {
  const [Show, setShow] = useState(false);
  const navigate = useNavigate(); // ✅ useNavigate instead of useHistory

  // Transition Navbar
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <div className={`nav ${Show && 'nav-black'}`}>
      <div className="nav_contents">
        <img onClick={() => navigate("/")} // ✅ updated here
          className="nav-logo"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix-logo"
        />
        <img
          onClick={() => navigate("/profile")} // ✅ updated here
          className="nav-avater"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
