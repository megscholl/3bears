
import React, { Component } from 'react';
import './research.css';
import dressCodeGraph from './images/graphs/dresscode.PNG'
import officeLayoutGraph from './images/graphs/officelayout.PNG'
import teamBuildingGraph from './images/graphs/team-building.PNG'
import gender from './images/graphs/gender.PNG'
import hours from './images/graphs/hours.PNG'

class Research extends Component {
    render() {
        return(
            <div>
            <article>
                <h1 className="research-h1">Research Conducted for 3Bears</h1>
                    <section className="research-content">
                        <h2>A Survey to ~4,800 Nashville Tech Professionals</h2>
                        <p>
                        A Google Survey went out to almost 4,800 professionals working in the Nashville Tech industry asking detailed information about the companies they currently work for. The general idea for 3Bears is to promote all companies, not one over the other. Each person who filled out this survey was once an individual seeking a job, whether culture fit was important and on their mind or if they were just looking for their first gig, finally.</p>

                        <p>Questions about company size, dress code, management styles, diversity, and conflict resolution were asked, along with why they chose to apply to that company at all, and with that they were asked what they liked and disliked about that company. When it comes to culture fit, professionals aren't just looking for dress code and management styles, but about typical hours and planning processes the companies practice when new projects come in. </p>

                        <p>No question was required, except for the company name, to allow future job-seekers real information about the companies they will one day work for. </p>

                        <p>Below are the graphical findings of 3Bears data.</p>
                    </section>
                    <section className="graphs-layout">
                        <div className="container">
                            <img src={dressCodeGraph} alt="dress code graph results" className="graphs right-content"/>
                            <p className="content-top">3Bears surveyers were asked what the dress policy is for their company. There were four options: Business Casual, Smart Casual, Casual, and No Dress Code. The survey included images of what each look portrayed for a dress policy. Surprisingly, there were more 'No dress code' selections than there were 'Business Casual'.</p>
                        </div>

                        <div className="container">
                            <img src={officeLayoutGraph} alt="office layout graph results" className="graphs left-content"/>
                            <p className="content-top">Office layouts may not typically be incuded in many questions for culture fit, but if the layout of an office is cubicles rather than open space with couches and unassigned desks, then there is a clear difference in company culture. Most offices were an open-floor layout with assigned desks, but surveyers were able to put in their own office's layout, which included remote/ distributed teams / home offices and classrooms. In Version 2 of 3Bears, there would include questions about break activities as well. </p>
                        </div>

                        <div className="container">
                            <img src={teamBuildingGraph} alt="team-building graph results" className="long-graphs right-content"/>
                            <p className="content-top">Team building activities are important for, well, team building. These types of activities help improve workplace projects that involve teamwork. After completing team building activities together, employees better understand each other's strengths, weaknesses, and interests. This understanding helps them work even better together on future progress vital to a company.</p>
                        </div>

                        <div className="container">
                            <img src={gender} alt="gender graph results" className="graphs left-content"/> 
                            <p className="content-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>

                        <div className="container">
                            <img src={hours} alt="hours graph results" className="graphs right-content"/> 
                            <p className="content-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </section>
                </article>
            </div>
        )
    }
}


export default Research;