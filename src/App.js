import './App.css';
import { ReactDOM } from "react-dom"
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import InformationTechnology from './Components/Information Technology/InformationTechnology';
import OperationsResearchandDecision from './Components/Operations Research and Decision/OperationsResearchandDecision';
import ComputerScience from './Components/Computer Science/ComputerScience';
import InformationSystems from './Components/Information Systems/InformationSystems';
import SoftwareEngineering from './Components/Software Engineering/SoftwareEngineering';
import Abouttheestablishmentoftheprogram from './Components/Aboutthe establishment of the program/Abouttheestablishmentoftheprogram';
import Vision from './Components/Vision/Vision';
import Themessage from './Components/the message/themessage';
import Objectives from './Components/Objectives/Objectives';
import Communityservices from './Components/Community services/Communityservices';
import Serviceprojects from './Components/Serviceprojects/Serviceprojects';
import UniversitySociety from './Components/University & Society of Menofia/UniversitySociety';
import ComputerEducationCenters from './Components/Computer Education Centers/ComputerEducationCenters';
import TrainingAtFci from './Components/Training At Fci/TrainingAtFci';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import CenterUnits from './Components/Center & Units At Fci/CenterUnits';
// import FacultyMembers from './Components/Faculty Members/FacultyMembers';
import Trinng from './Components/Tranning Center/Tranng';
import JopsCenter from './Components/Jops Center/JopsCenter';
import CommuntyCenter from './Components/Communty Center/CommuntyCenter';
import Location from './Components/Location/Location';
import Healthcare from './Components/Health care/Healthcare';
import Hospitals from './Components/Hospitals/Hospitals';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className='root'>
      <Router>

        <Navbar />

        <Switch>


          <Route exac path='/home'>
            <Home />
          </Route>
          <Route exac path='/about'>
            <About />
          </Route>
          <Route exac path='/informationTechnology'>
            <InformationTechnology />
          </Route>
          <Route exac path='/operationsResearchandDecision'>
            <OperationsResearchandDecision />
          </Route>
          <Route exac path='/computerScience'>
            <ComputerScience />
          </Route>
          <Route exac path='/informationSystems'>
            <InformationSystems />
          </Route>

          <Route exac path='/softwareEngineering'>
            <SoftwareEngineering />
          </Route>

          <Route exac path='/abouttheestablishmentoftheprogram'>
            <Abouttheestablishmentoftheprogram />
          </Route>

          <Route exac path='/vision'>
            <Vision />
          </Route>

          <Route exac path='/themessage'>
            < Themessage />
          </Route>

          <Route exac path='/objectives'>
            <Objectives />
          </Route>

          <Route exac path='/communityservices'>
            <Communityservices />
          </Route>
          <Route exac path='/universitySociety'>
            <UniversitySociety />
          </Route>

          

          <Route exac path='/serviceprojects'>
            <Serviceprojects />
          </Route>

          <Route exac path='/computerEducationCenters'>
            <ComputerEducationCenters/>
          </Route>

          <Route exac path='/trainingAtFci'>
            <TrainingAtFci />
          </Route>
          <Route exac path='/centerUnits'>
            <CenterUnits />
          </Route>

          <Route exac path='/trinng'>
            <Trinng />
          </Route>


          <Route exac path='/jopsCenter'>
            <JopsCenter />
          </Route>
          
          <Route exac path='/communtyCenter'>
            <CommuntyCenter />
          </Route>

          <Route exac path='/location'>
            <Location />
          </Route>

          <Route exac path='/healthcare'>
            <Healthcare />
          </Route>
          <Route exac path='/hospitals'>
            <Hospitals />
          </Route>

          <Route exac path='/login'>
            <Login />
          </Route>
          
          

          



          






        
          
          <Route exac path='/'>
            <Home />
          </Route>

          <Redirect from='' exac to='/home'/>

        </Switch>
      </Router>

      <Footer />

    </div>

  );
}

export default App;
