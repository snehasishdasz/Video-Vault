
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Upload from "./components/Upload";
import Profile from "./Profile/Profile"

import UserProvider from "./context/userContext";

function App() {
  return (
  <UserProvider>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/Upload" element={<Upload/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/contributors" element={<Profile/>} />
      </Routes>
      <Footer/>
    </Router>
  </UserProvider>
  );
}

export default App;
