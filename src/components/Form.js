import React from 'react';
// import ReactDOM from 'react-dom';
import { Button, Form } from 'semantic-ui-react';
import './form.css';


class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {company: '',
                  size: '',
                  diversity: '',
                  resolution: '',
                  dress: '',
                  planning: '',
                  mgmt: '',
                  layout: '',
                  team: '',
                  likes: '',
                  dislikes: '',
                  hours: '',
                  appeal: ''
            };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
            company: event.target.company,
            size:  event.target.size,
            diversity:  event.target.diversity,
            resolution:  event.target.resolution,
            dress:  event.target.dress,
            planning:  event.target.planning,
            mgmt:  event.target.mgmt,
            layout:  event.target.layout,
            team:  event.target.team,
            likes:  event.target.likes,
            dislikes:  event.target.dislikes,
            hours:  event.target.hours,
            appeal:   event.target.appeal
    });
  }

  handleSubmit(event) {
    alert('Thank you for adding a review about ' + this.state.company + '! This will ensure that 3Bears will be the number 1 site for job-seekers, once like yourself, to find information about the culture fit of different companies in Nashville.');
    event.preventDefault();
  }

  render() {
    return (
        <Form className="field-30">
          <Form.Field>
            <label>Company Name</label>
            <input type="text" placeholder='Company name' value={this.state.company}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field className="field-50">
            <label>How large is the company?</label>
            <input placeholder='Company size' value={this.state.size}  onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Does your office have a good balance of diversity?</label>
            <input placeholder='Diversity'  value={this.state.diversity} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>There's conflict within your team. How does your management typically help resolve the issue(s)?</label>
            <input placeholder='Conflict Resolution' className="field-height" value={this.state.resolution}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>What is the dress code?</label>
            <input placeholder='Business casual, smart casual, casual, no dress code'  value={this.state.dress}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>You have a new project with a deadline, what is the planning process?</label>
            <input placeholder='Planning process' className="field-height"  value={this.state.planning}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>What is the layout of your office?</label>
            <input placeholder='Office layout'  value={this.state.layout}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>You email your boss requesting a day off, their typical reply is...</label>
            <input placeholder='Understanding, easy-going, difficult...'  value={this.state.mgmt} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>The company you work for has team-building activities. What are they?</label>
            <input placeholder='Baseball game, daily stand-ups, none...' className="field-height"  value={this.state.team} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>What do you like about your company's culture?</label>
            <input placeholder='What makes going into work great?' className="field-height"  value={this.state.likes} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>What do you dislike about your company's culture?</label>
            <input placeholder='What could the company improve on?' className="field-height" value={this.state.dislikes}  onChange={this.handleChange} />
          </Form.Field>
          <Form.Field className="field-50">
            <label>What are your typical hours per week?</label>
            <input placeholder='Hours per week'  value={this.state.hours} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>When you were looking for your job, what did you look for in a company?</label>
            <input placeholder='Company appeal' className="field-height"  value={this.state.appeal} onChange={this.handleChange} />
          </Form.Field>
      
          <Button type='submit'>Submit</Button>
          </Form>
    );
  }

}



export default CompanyForm;
