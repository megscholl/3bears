import React, { Component } from 'react';
import './companies.css';
import { NavLink } from 'react-router-dom';
import pingpong from './images/pingpong.jpg'
import advent from './images/companies/Advent.png'
import aetna from './images/companies/aetna.png'
import asurion from './images/companies/asurion.png'
import cbs from './images/companies/cbs.png'
import cgi from './images/companies/cgi.png'
import efc from './images/companies/EFCsystems.jpg'
import emma from './images/companies/emma.png'
import ena from './images/companies/ENA_Logo.png'
import eventbrite from './images/companies/eventbrite.png'
import factor from './images/companies/factorinc.png'
import fma from './images/companies/fma.png'
import gsf from './images/companies/GSF.jpg'
import ghertner from './images/companies/ghertner.png'
import groups360 from './images/companies/groups360.png'
import hca from './images/companies/HCA.png'
import healthtrust from './images/companies/healthtrust.png'
import lp from './images/companies/lp.png'
import neuro from './images/companies/neurotargeting.PNG'
import nss from './images/companies/nss.png'
import nurse from './images/companies/nurse.png'
import opensky from './images/companies/opensky.svg'
import pylon from './images/companies/pylonai.png'
import quore from './images/companies/quore.png'
import ramsey from './images/companies/ramsey.svg'
import regions from './images/companies/regions.png'
import tapclicks from './images/companies/tapclicks.png'
import tngov from './images/companies/tn.PNG'
import vandy from './images/companies/vandymed.png'
import webflow from './images/companies/webflow.png'
import youscience from './images/companies/youscience.jpg'


import { Button, Icon } from 'semantic-ui-react'



class Companies extends Component {
    render() {
        return(
            <div>
                <h1 className="research-h1">Companies to Discover at 3Bears</h1>
                
                <div className="quote-container">
                    <blockquote className="quote-blockquote"> "A company culture that facilitates employee happiness means lower turnover and better company performance. Employees are loyal and companies perform better. It’s a win-win."
                    <h6 className="author">zach buylgo, 'the 4 elements that make a great company culture'</h6>
                    </blockquote>
                </div>

                <div className="banner-container"><img src={pingpong} alt="pingpong office" className="banner"/></div>   

                <h2 className="research-h2">Employees have already submitted culture info about these companies...</h2>
                <div className="logo-container">
                <img src={advent} alt="advent" className="advent"/>
                <img src={aetna} alt="aetna" className="aetna"/>
                <img src={asurion} alt="asurion" className="asurion"/>
                <img src={cbs} alt="cbs" className="cbs"/>
                <img src={cgi} alt="cgi" className="cgi"/>
                <img src={efc} alt="efc" className="efc"/>
                <img src={emma} alt="emma" className="emma"/>
                <img src={ena} alt="ena" className="ena"/>
                <img src={eventbrite} alt="eventbrite" className="eventbrite"/>
                <img src={factor} alt="factor" className="factor"/>
                <img src={fma} alt="fma" className="fma"/>
                <img src={gsf} alt="gsf" className="gsf"/>
                <img src={ghertner} alt="ghertner" className="ghertner"/>
                <img src={groups360} alt="groups360" className="groups360"/>
                <img src={hca} alt="hca" className="hca"/>
                <img src={healthtrust} alt="healthtrust" className="healthtrust"/>
                <img src={lp} alt="lp" className="lp"/>
                <img src={neuro} alt="neuro" className="neuro"/>
                <img src={nss} alt="nss" className="nss"/>
                <img src={nurse} alt="nurse" className="nurse"/>
                <img src={opensky} alt="opensky" className="opensky"/>
                <img src={pylon} alt="pylon" className="pylon"/>
                <img src={quore} alt="quore" className="quore"/>
                <img src={ramsey} alt="ramsey" className="ramsey"/>
                <img src={regions} alt="regions" className="regions"/>
                <img src={tapclicks} alt="tapclicks" className="tapclicks"/>
                <img src={tngov} alt="tngov" className="tngov"/>
                <img src={vandy} alt="vandy" className="vandy"/>
                <img src={webflow} alt="webflow" className="webflow"/>
                <img src={youscience} alt="youscience" className="youscience"/>
                </div>


            <div className="center-btn">
                <NavLink to="/reviews">
                    <Button animated>
                        <Button.Content visible>Write a Review about your Company!</Button.Content>
                        <Button.Content hidden>
                            <Icon name='right arrow' />
                        </Button.Content>
                    </Button>
                </NavLink>
            </div>

            </div>
    )}
}


export default Companies;