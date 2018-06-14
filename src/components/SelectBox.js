import React from 'react';
// import Select from 'react-select';
import { Dropdown } from 'semantic-ui-react'

      
       

class SelectBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            seeList: '',
        }
    }



    componentDidMount = () => {
        fetch("https://bears-22c68.firebaseio.com/companies.json")
        .then(res => res.json())
        .then(
            (result) => {
            let boxCompanyList = [];
                let seeObject = Object.values(result);
                for(let company in seeObject){
                boxCompanyList.push(seeObject[company].company)
                }
                console.log("company List", boxCompanyList);
                this.setState({
                    isLoaded: true,
                    seeList: boxCompanyList
                    })
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            })
        }



  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
		// selectedOption can be null when the `x` (close) button is clicked
		if (selectedOption) {
    	console.log(`Selected: ${selectedOption.label}`);
		}
  }

    render() {
        // const { selectedOption } = this.state;
        
        if(this.state.isLoaded === true) {
            // let optionsCollection = this.state.seeList.map((c) => <option value={c} label={c} onChange={this.handleChange}>{c}</option>);
                // let valueOfCompanyOptions = this.state.seeList.map((c) => {return {value: c, label: c}});
                
            return (
                <div>
                
                    <Dropdown placeholder='Choose your company' fluid search selection options={this.state.seeList.map((c) => {return {value: c, label: c}})} />

                    
                    {/*<Select
                        name="company"
                        value={selectedOption}
                        onChange={this.handleChange}
                        options=
                            {this.state.seeList.map((c) => {return {value: c, label: c}})}
                    />*/}
                </div>
            );
            } else{
                console.log("error setting state")
                return(<div>error setting state</div>)
            }
        }
}

export default SelectBox;
