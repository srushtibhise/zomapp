import React from 'react';

const Footer = (props) => {
    return (
        <React.Fragment>
            <hr/>
            <center>
                <h3>&copy; Srushti Bhise {props.year} {props.month}</h3>
            </center>
        </React.Fragment>
    )
}

export default Footer;