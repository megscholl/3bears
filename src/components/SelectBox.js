import React from 'react';
import { Dropdown } from 'semantic-ui-react'

      
       

class SelectBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            seeList: [],
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
                    boxCompanyList.push({key: seeObject[company].company, value: seeObject[company].company, text:seeObject[company].company})
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



        handleChange = (e, c) => {
            this.setState({ selectedOption: c.value }, this.checkState);
            this.props.changeCompany(c.value)
        }

  checkState = () => {
      console.log("CHECK STATE AFTER HANDLE CHANGE", this.state)
  }

    render() {
        
        if(this.state.isLoaded === true) {

            // let optionsList = this.state.seeList.map((c, index) => {return {value: c, label: c, key: index}})
            return (
                <div>
                    <Dropdown placeholder='Choose your company' value={this.state.selectedOption} onChange={this.handleChange} fluid search selection options={this.state.seeList} />
                    {console.log(this.state.selectedOption)}
                </div>
            );
            } else{
                console.log("error setting state")
                return(<div>error setting state</div>)
            }
        }
}

export default SelectBox;
