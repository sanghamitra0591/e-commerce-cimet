import Blog from "./componants/Blog"
import Footer from "./componants/Footer/Footer"
import Header from "./componants/Header/Header"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
       <div className="overflow-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element="Error" />
          </Routes>
          <Footer/>
        </Router>
      </div>
  )
}

export default App
