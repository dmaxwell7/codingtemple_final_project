import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';



// const App = () => {

//   const { isLoading } = useAuth0();
//   if (isLoading) return <div>Loading...</div>

//   return (
//   <>
//     <LoginButton />
//     <LogoutButton />
//     <Profile />
//     <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/exercise/:id" element={<ExerciseDetail />} />
//       </Routes>
//       <Footer />
//     </Box>
//   </>
//   )
// }

// export default App


const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && 
      <>
        <LogoutButton />
        <Profile />
        <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
          <Footer />
        </Box>
      </>
      }
    </>
  )
}

export default App







