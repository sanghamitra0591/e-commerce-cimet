import Footer from "./componants/Footer/Footer";
import Header from "./componants/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
     
      <div style={{paddingTop:"90px"}}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
