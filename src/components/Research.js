
import React, { Component } from 'react';
import './research.css';
import dressCodeGraph from './images/graphs/dresscode.PNG'
import officeLayoutGraph from './images/graphs/dresscode.PNG'
import teamBuildingGraph from './images/graphs/team-building.PNG'
import gender from './images/graphs/gender.PNG'

class Research extends Component {
    render() {
        return(
            <div>
            <article>
                <h1 className="research-h1">Research Conducted for 3Bears</h1>
                    <section className="research-content">
                        <h2>A Survey to ~4,800 Nashville Tech Professionals</h2>
                        <p>
                        A Google Survey went out to over almost 4,800 professionals working in the Nashville Tech industryasking detailed information about the companies they currently work for. The general idea for 3Bears is to promote all companies, not one over the other. Each person who filled out this survey was once an individual seeking a job, whether culture fit was important and on their mind or if they were just looking for their first gig, finally.</p>

                        <p>Questions like company size, dress code, management styles, diversity, and conflict resolution were asked, along with why they chose to apply to that company at all, and with that they were asked what they liked and disliked about that company. When it comes to culture fit, professionals aren't just looking for dress code and management styles, but about typical hours and planning processes the companies practice when new projects come in. </p>

                        <p>No question was required, except for the company name, to allow future job-seekers real information about the companies they will one day work for. </p>

                        <p>Below are the graphical findings of 3Bears data.</p>
                    </section>
                    <section className="graphs-layout">
                    <img src={dressCodeGraph} alt="dress code graph results" className="graphs"/>
                    <img src={officeLayoutGraph} alt="office layout graph results" className="graphs"/>
                    <img src={teamBuildingGraph} alt="team-building graph results" className="long-graphs"/>
                    <img src={gender} alt="gender graph results" className="graphs"/>
                    </section>
                </article>
            </div>
        )
    }
}


export default Research;