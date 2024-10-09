import Footer from "./componants/Footer/Footer";
import Header from "./componants/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element="Error" />
        </Routes>
        <Footer />
      </Router> */}
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
