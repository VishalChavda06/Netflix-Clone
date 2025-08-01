import { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './Screens/LoginScreen';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './Features/userslice';
import { selectUser } from './Features/userslice';
import ProfileScreen from './Screens/ProfileScreen';

function App() {

  // user
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      if (user) {
        // console.log("User is signed in:", user);
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      } else {
        console.log("No user is signed in.");
        dispatch(logout())
      }
    });
    // Cleanup subscription on unmount
    return unsubscribe;
  }, [dispatch])
  return (
    <>
      <div className='app'>
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} /> {/* ✅ Moved inside */}
            </Routes>
          )}
        </Router>
      </div>

    </>
  );
}

export default App;
