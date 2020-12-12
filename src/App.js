import './App.css';
import {Route, BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header";
import {Slider} from "./components/Slider";
import {Services} from "./components/Services";
import {Responsive} from "./components/Responsive";
import {Features} from "./components/Features";
import {Clients} from "./components/Clients";
import {Footer} from "./components/Footer";
import {Pagebread} from "./components/Pagebread";
import {Companyinfo} from "./components/Companyinfo";
import {Team} from "./components/Team";
import {Pagebread_cu} from "./components/Pagebread_cu";
import {Map_section} from "./components/Map_section";
import {Pagebread_postf} from "./components/Pagebread_portf";
import {Portfolio} from "./components/Portfolio";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={()=><div>
            <Slider/>
            <Services/>
            <Responsive/>
            <Features/>
            <Clients/>
        </div>}/>
        <Route path="/aboutus" component={()=><div>
            <Pagebread/>
            <Companyinfo/>
            <Services/>
            <Responsive/>
            <Team/>

        </div>}/>
        <Route path="/contact" component={()=><div>
            <Pagebread_cu/>
            <Map_section/>
        </div>}/>
        <Route path="/portfolio" component={()=><div>
            <Pagebread_postf/>
            <Portfolio/>

        </div>}/>

          <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
