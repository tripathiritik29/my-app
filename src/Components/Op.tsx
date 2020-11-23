


import React from 'react';
import './Dash.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { doc } from 'prettier';
interface Props {

}






function Op() {
    let dec:number=6;
    dec=4;
    let list:number[]=[1,2];
    let x:[string,number];
    x=["ritik",2];
    console.log(x[0].substring(0));
    console.log(list);



    return (


        <div id="ll" className="nav">
            <ul style={{ listStyleType: "none", padding: '5px', height: '100%' }}>
                <li>
                    <Link to="/suggestions" style={{ textDecoration: 'none', color: 'grey', fontSize: "15px" ,textAlign:"center"}}>Home</Link>
                </li>
                <br></br>
                <li>
                    <Link to="/favourites" style={{ textDecoration: 'none', color: 'grey', fontSize: "15px" }}>About</Link>
                </li>
                <br></br>
                <li>
                    <Link to="/rejected" style={{ textDecoration: 'none', color: 'grey', fontSize: "15px" }}>Services</Link>
                </li>
            </ul>




        </div>
    )

}

export default Op;