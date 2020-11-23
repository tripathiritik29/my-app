import React from 'react';
import './Dash.css'
interface Props {

}



function Dash2(props: Props) {

    return (
        <div>
            <h1 className="header">Services we offer</h1>

            <ul className="li">
                <li>Security</li>
                <li>Integrity</li>
                <li>Maintainence</li>
                <li>Reliability</li>
                <li>Performance</li>
                <li>Availability</li>

            </ul>
        </div>
    )

}

export default Dash2;