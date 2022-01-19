import "./App.css";

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Employees from "./employees/employees";
import Users from "./Users/Users";
import Toggle from "./Toggle/Toggle";
import Greeting from "./conditional/Greeting";
import LoginControl from "./elementVariables/LoginControl";
import MailBox from "./AndOperator/Mailbox";
import BasicList from "./ListAndArray/BasicList";
import BasicObjectList from "./ListAndArray/BasicObjectList";
import NameForm from "./Forms/InputField";
import TemperatureCalculator from "./TemperatureCalculator/TemperatureCalculator";
import BootstrapPractice from "./BootstapPractice/BootstrapPractice";
import Home from "./Routing/Home";
import About from "./Routing/About";
import ContactUs from "./Routing/ContactUs";

function App() {
  const todoData = [
    { id: 1, name: "AK" },
    { id: 2, name: "SK" },
    { id: 3, name: "RK" },
    { id: 4, name: "VK" },
    { id: 5, name: "BK" },
  ];

  return (
    <>
      {/* <Employees />
      <Users />
      <Toggle />
      <Greeting isLoggedIn={true} />
      <LoginControl />
      <MailBox unreadMessages={["React", "Re: React", "Re:Re: React"]} />
      <BasicList numbers={[1, 2, 3, 4, 5, 6, 7, 8]} />
      <BasicObjectList todoData={todoData}/>
      <NameForm/>
      <TemperatureCalculator/>
      <BootstrapPractice/>     */}
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home />} />

          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/about" element={<About />} />

          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contact-us" element={<ContactUs />} />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
