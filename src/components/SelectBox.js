import React from 'react';
import Select from 'react-select';

      
       

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
            let companyList = [];
                let seeObject = Object.values(result);
                for(let company in seeObject){
                companyList.push(seeObject[company].company)
                }
                console.log("company List", companyList);
                this.setState({
                    isLoaded: true,
                    seeList: companyList
                    })
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error,
                })
            })
        }





    render() {
        const { selectedOption } = this.state;
        
        if(this.state.isLoaded === true) {
            // let optionsCollection = this.state.seeList.map((c) => <option value={c} label={c} onChange={this.handleChange}>{c}</option>);

            return (
                        <Select
                            name="company"
                            value={selectedOption}
                            onChange={this.props.changeCompany}
                            options=
                                {this.state.seeList.map((c) => {return {value: c, label: c}})}
                        />
            );
            } else{
                console.log("error setting state")
                return(<div>error setting state</div>)
            }
        }
}

export default SelectBox;
