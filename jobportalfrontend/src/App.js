import './App.css';
import { Routes, Route} from "react-router-dom";

import Home from './components/Welcome/Home';
import Login from './components/Welcome/Login';
import Profile from './components/Profile';
import Createaccount from './components/Welcome/Createaccount';
import JobCanvas from './components/Dashboard/JobCanvas';

function App() {
  return (
    <>
      <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Createaccount />} path="/createaccount" />
      <Route element={<Login />} path="/login" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<JobCanvas />} path="/jobcanvas" />

    </Routes>
    
    </>
    
  );
}

export default App;