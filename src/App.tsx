import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import logo from './logo.svg';
import Dash from './Components/Dash';
import Dash1 from './Components/Dash1';
import Dash2 from './Components/Dash2';
import Op from './Components/Op';



function App() {

 
   
  const navItems = [

    {
      label: 'Suggestions',
      path: '/suggestions'
    },
    {
      label: 'Favourites',
      path: '/favourites'
    },
    {
      label: 'Rejected',
      path: '/rejected'
    },

  ];

  const element = <h1>Hello, world</h1>;




  return (
    

    <Router>
      
      <div style={{ display: "flex" ,justifyContent:'space-around' }}>
     
       

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Link to="/van" style={{ textDecoration: 'none', color: 'grey', fontSize: "30px", marginLeft: "13%" }}></Link>
          </div>
          <div style={{ padding: "40px", marginLeft: "2%", width: "350px" }}>
            <Switch>
              <Route

                path={'/van'}
                children={Op}
                exact
              />
            </Switch>
          </div>
        </div>


        <div >
          <nav role="navigation">
            <div id="menuToggle">

              <input type="checkbox" />


              <span></span>
              <span></span>
              <span></span>


              <ul id="menu">
                <a href="/suggestions"><li>Home</li></a>
                <a href="/favourites"><li>About</li></a>
                <a href="/rejected"><li>Services</li></a>
                
              </ul>
            </div>
          </nav>
        </div>






        <div style={{ flex: 1, padding: "40px", marginLeft: "5%" }}>
          <Switch>
            <Route

              path={'/suggestions'}
              children={Dash}
              exact
            />
            <Route

              path={'/favourites'}
              children={Dash1}
              exact
            />
            <Route

              path={'/rejected'}
              children={Dash2}
              exact
            />

          </Switch>
        </div>
      </div>
    </Router>

  );
  
    ReactDOM.render(element, document.getElementById('roota'));
}

export default App;