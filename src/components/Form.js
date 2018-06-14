import React from 'react';
// import ReactDOM from 'react-dom';
import FormIntro from './FormIntro'
import { Button, Form } from 'semantic-ui-react';
import {rebase} from './fb-key';
import './form.css';
import SelectBox from './SelectBox';
// import getCompanyResults from './Fetch';


// console.log("getCompanyResults", getCompanyResults());


export function SaveObjToFB (endpoint, objToSave) {
   return rebase.push(endpoint, {
     data: objToSave,
       then(err) {
         if(err) {
          alert('There was an issue submitting your information. Please try again.');
         } else if (!err) {
          //  console.log("good to go");
        }}
     })
     .then((result) => {
        // console.log("result of submitted data", result);
        return result;
     })
 }


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
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log("value, name", value, name);
    this.setState({
            [name]: value
    });
  }

  handleSelectBox = (a, b, c) => {
    this.setState({ company: c.value }, this.checkState);

  }

  checkState = () => {
    console.log("CHECKING STATE", this.state)
  }

  handleSubmit(event) {
    alert('Thank you for adding a review about ' + this.state.company + '! This will ensure that 3Bears will be the number 1 site for job-seekers, once like yourself, to find information about the culture fit of different companies in Nashville.');
    event.preventDefault();
    let stateObject = this.state;
    SaveObjToFB(`companies/${(this.state.company).toLowerCase()}`, stateObject);
    console.log("form object", )
  }

  render() {

    return (
      <div>
        <FormIntro />
        <Form onSubmit={this.handleSubmit} className="field-30">

         <Form.Field>
          <label>What company do you currently work for?</label>
          <SelectBox name="company" text={this.state.company} value={this.state.company}  changeCompany={this.handleSelectBox}/>
          </Form.Field>
          <Form.Field className="field-50">
            <label>How large is the company?</label>
            <input placeholder={this.state.company} name="size" value={this.state.size}  onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Does your office have a good balance of diversity?</label>
            <input placeholder='Diversity' name="diversity"  value={this.state.diversity} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>There's conflict within your team. How does your management typically help resolve the issue(s)?</label>
            <input placeholder='Conflict Resolution' name="resolution" className="field-height" value={this.state.resolution}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>What is the dress code?</label>
            <input placeholder='Business casual, smart casual, casual, no dress code' name="dress"  value={this.state.dress}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>You have a new project with a deadline, what is the planning process?</label>
            <input placeholder='Planning process' className="field-height" name="planning"  value={this.state.planning}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>What is the layout of your office?</label>
            <input placeholder='Office layout' name="layout"  value={this.state.layout}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>You email your boss requesting a day off, their typical reply is...</label>
            <input placeholder='Understanding, easy-going, difficult...'  name="mgmt" value={this.state.mgmt} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>The company you work for has team-building activities. What are they?</label>
            <input placeholder='Baseball game, daily stand-ups, none...' className="field-height" name="team"  value={this.state.team} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>What do you like about your company's culture?</label>
            <input placeholder='What makes going into work great?' className="field-height" name="likes"  value={this.state.likes} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>What do you dislike about your company's culture?</label>
            <input placeholder='What could the company improve on?' name="dislikes" className="field-height" value={this.state.dislikes}  onChange={this.handleChange} />
          </Form.Field>
          <Form.Field className="field-50">
            <label>What are your typical hours per week?</label>
            <input placeholder='Hours per week' name="hours"  value={this.state.hours} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>When you were looking for your job, what did you look for in a company?</label>
            <input placeholder='Company appeal' className="field-height" name="appeal"  value={this.state.appeal} onChange={this.handleChange} />
          </Form.Field>
      
          <Button type='submit'>Submit</Button>
          </Form>

        </div>
    );
  }

}



export default CompanyForm;
