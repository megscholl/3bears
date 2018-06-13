import React from 'react';
import Select from 'react-select';





    // componentWillMount() {
    //     this.getCompanyResults()
    //   }
      
                    
    companyState = (companyList) => {
        console.log("company list companyState", companyList);
        this.setState({
        seeList: companyList
        },
        this.seeCoList()
        // console.log("this.state", this.state)
        );
    }
    
    seeCoList = () => {
        console.log("this.state", this.state)
    }
    
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
  
            this.companyState(companyList);
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error: error,
            })
        })


class SelectBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        }
    }


  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
		// selectedOption can be null when the `x` (close) button is clicked
		if (selectedOption) {
    	console.log(`Selected: ${selectedOption.label}`);
		}
  }
  render() {
  	const { selectedOption } = this.state;

    return (
        <Select>
        {/*            {console.log("this.state", this.state)}
                      {this.state.map(c => 
                      <option value={c.company} onChange={this.handleChange}>{c.company}</option>
                    )}
                  */}
                    </Select>
    );
  }
}

export default SelectBox;
