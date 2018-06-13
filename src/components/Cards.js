
import React from 'react'
import  { Card } from 'semantic-ui-react';
import getCompanyResults from './SelectBox';



class CompanyCards extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            resultsLoaded: true,
            companyResults: [],
            error: null
        }

        // this.getAnotherClicked=this.getAnotherClicked.bind(this);
    }
    
    componentDidMount(){
        let companyState = getCompanyResults();
        this.setState = {
            companyResults: companyState
        }
        // .then((result) => {
        //     console.log("res res", result);
        // });
    }



    getCompanyResults = () => {
        console.log("fetch running");
            fetch("https://bears-22c68.firebaseio.com/companies.json")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("result",  Object.values(result));
                    return Object.values(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error,
                    })
                })
        }

    render() {
            let {error, resultsLoaded, companyResults} = this.state;
            console.log("companyResults", companyResults);
            if(error) {
                return (
                    <div>Error: {error.message}</div>
                )
            } else if(!resultsLoaded) {
                return <div>Loading...</div>
            } else{
                let surveyResults = companyResults.map((company, index) => (
                    <div key={index}>
                      <Card>
                        {company.company}
                        {}
                        {}
                      </Card>
                    </div>
                ))
                return (
                    <div>{surveyResults}</div>
                )
            }
        
    }
}
    
export default CompanyCards;