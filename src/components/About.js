
import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return(
            <div>
                <h1 className="research-h1">About 3Bears</h1>

                <div className="p-container">
                <p>3Bears was developed with the idea of finding what company is right for you. Missions and values of companies vary, and each one is unique in their own ways. Whether it's management styles, dress code, conflict resolution, or flexible schedules, there's a culture fit for everyone. </p>

                <p>Everyone knows the folk-tale Goldilocks and the Three Bears, which portrayed this idea wholy by describing Goldilocks's experience trying out the three bears' beds and porridge: one was too hot or too firm, another was too soft or too cold, but the other... the other was just right for Goldi. </p>
           
                <p>The idea for a culture fit-oriented website was developed by the creative and methodolical mind of a youg unicorn designer/developer living in Nashville. She was always told by employers and those close to her to find a company she believed in their values and mission, and to search for positions within those companies (very millennial, amiright?). Culture fit is a form-based site which allows users to enter information about the companies they work for. 3Bears is a trust-oriented site, but still requires validation. Be humble and honest.</p>
           
                <p>To find out more about the developer and designer, visit her portfolio site at <a href="http://megscholl.com" target="_blank" rel="noopener noreferrer" alt="go to meg scholl's portfolio site" title="go to meg scholl's portfolio site">megscholl.com</a>.</p>
                </div>
            </div>
        )
    }
}


export default About;