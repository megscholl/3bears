
import React, { Component } from 'react';
import './research.css';
import Quote from './images/graphs/quote.PNG'
import Challenge from './images/graphs/ch_statement.PNG'
import Persona from './images/graphs/persona.PNG'
import Research from './images/graphs/research.PNG'
import Mvp from './images/graphs/mvp_stretch_v2.PNG'
import Prototype from './images/graphs/prototype.PNG'


class Contact extends Component {
    render() {
        return(
            <div>
                <h1 className="research-h1">3Bears UX Design Process </h1>
                <div className="process-container">
                    <img src={Quote} alt="quote" className="process-img"/>
                    <img src={Challenge} alt="challenge statement" className="process-img"/>
                    <img src={Persona} alt="Persona" className="process-img"/>
                    <img src={Research} alt="research" className="process-img"/>
                    <img src={Mvp} alt="MVP stretch V2" className="process-img"/>
                    <img src={Prototype} alt="Prototype" className="process-img"/>
                </div>
            </div>
        )
    }
}


export default Contact;

