import React from 'react';
// import ReactDOM from 'react-dom';
import FormIntro from './FormIntro'
import { Button, Form } from 'semantic-ui-react';
import {rebase} from './fb-key';
import './form.css';
import SelectBox from './SelectBox';
import swal from 'sweetalert'
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
                  appeal: '',
                  selectedOption: ''
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
    this.setState({ company: c.value,
                    selectedOption: ''}, this.checkState);

  }

  checkState = () => {
    console.log("CHECKING STATE", this.state)
  }

  handleSubmit(event) {
    swal({
      icon: "success",
      title: "Thank you!",
      text: 'Thank you for adding a review to 3Bears! This will ensure that 3Bears will be the #1 site for job-seekers, once like yourself, to find information about the culture fit of different companies in Nashville. The review may take up to 24 hours!',
      buttons: true,
      timer: 10000,
    });
    
    event.preventDefault();
    let stateObject = this.state;
    SaveObjToFB(`companies/`, stateObject);
    console.log("form object", )
  }

  render() {

    return (
      <div>
        <FormIntro />
        <h2 className="form-h2">Basics about your Company</h2>
        <Form onSubmit={this.handleSubmit} className="field-30">

        <section className="section-small">
         <Form.Field>
          <label>What company do you currently work for?</label>
          <SelectBox text={this.state.company} value={this.state.selectedOption} name={this.state.company} changeCompany={this.handleSelectBox}/>
          </Form.Field>
          <div className="form-col2">
          <Form.Field className="field-50">
            <label>How large is the company?</label>
            <input placeholder='Number of employees' name="size" value={this.state.size}  onChange={this.handleChange} />
          </Form.Field>
          <Form.Field className="field-50">
            <label>What is the dress code?</label>
            <input placeholder='Business casual, smart casual, casual, no dress code' name="dress"  value={this.state.dress}  onChange={this.handleChange}/>
          </Form.Field>
          </div>
          <Form.Field>
            <label>Does your office have a good balance of diversity?</label>
            <input placeholder='Diversity' name="diversity"  value={this.state.diversity} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>What is the layout of your office?</label>
            <input placeholder='Office layout' name="layout"  value={this.state.layout}  onChange={this.handleChange}/>
          </Form.Field>
          </section>

          
          <h2 className="form-h2">Culture Fit Questions</h2>
          <section className="section-large">
          <Form.Field>
            <label>There's conflict within your team. How does your management typically help resolve the issue(s)?</label>
            <input placeholder='Conflict Resolution' name="resolution" className="field-height" value={this.state.resolution}  onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>You have a new project with a deadline, what is the planning process?</label>
            <input placeholder='Planning process' className="field-height" name="planning"  value={this.state.planning}  onChange={this.handleChange}/>
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
          <Form.Field className="field-60">
            <label>What are your typical hours per week?</label>
            <input placeholder='Hours per week' name="hours"  value={this.state.hours} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>When you were looking for your job, what did you look for in a company?</label>
            <input placeholder='Company appeal' className="field-height" name="appeal"  value={this.state.appeal} onChange={this.handleChange} />
          </Form.Field>
          </section>
      
          <Button type='submit' className="submit-btn">Submit</Button>
          </Form>

        </div>
    );
  }

}



export default CompanyForm;
