import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){ 
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Import-Export" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="comntainer my-3">
    {/* <Routes>
          <Route path="/about" element={<About/>}/>x */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/">
            <TextFrom showAlert={showAlert} heading="Enter the Text of analyze below" mode={mode}/>
          </Route> */}
    {/* </Routes> */}
    <About/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;