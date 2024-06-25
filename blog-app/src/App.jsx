
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import BlogPage from "./Pages/BlogPage/BlogPage.jsx";
import BlogCate from "./Pages/BlogCate/BlogCate.jsx";
import {Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
     <Navbar/>
     <Routes>
   <Route  path="/" element={<HomePage/>} /> 
   <Route  path="BlogPage" element={<BlogPage/>} />  
   <Route  path="/category/:category" element={<BlogCate/>} />  

     
     </Routes>
     <Footer/>
    </>
  )
}

export default App
