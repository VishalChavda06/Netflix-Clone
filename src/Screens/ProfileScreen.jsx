import Navbar from "../Components/Navbar";
import "../CSS/ProfileScreen.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../Features/userslice';
import { getAuth, signOut } from "firebase/auth";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Navbar />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans (Current Plan: Premium)</h3>
              <button onClick={() => signOut(getAuth())} className="profileScreen_signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
