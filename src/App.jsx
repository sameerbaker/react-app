import Clients from "./clients";
import Employees from "./employees";
import Footer from "./footer";
import Navbar from "./navbar";

export default function App(){
  return (
    <div>
        <Navbar/>
        <Employees/>
        <Clients/>
      <Footer/>
    </div>
  )

}