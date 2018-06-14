import React from 'react';
// import Select from 'react-select';
import { Dropdown } from 'semantic-ui-react'

      
       

class SelectBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            seeList: '',
            selectedOption: ''
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
                    seeList: boxCompanyList,
                    selectedOption: ''
                    })
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            })
        }



  handleChange = (e, index, value) => {
      console.log("e before setState: ", index.value)
    this.setState({ selectedOption: index.value }, console.log("selectedOption: ", this.state.selectedOption));
    
  }

    render() {
        
        if(this.state.isLoaded === true) {

            let optionsList = this.state.seeList.map((c, index) => {return {value: c, label: c, key: index}})
            return (
                <div>
                    <Dropdown placeholder='Choose your company' value={this.state.selectedOption} onChange={this.handleChange} fluid search selection options={optionsList} />
                </div>
            );
            } else{
                console.log("error setting state")
                return(<div>error setting state</div>)
            }
        }
}

export default SelectBox;
