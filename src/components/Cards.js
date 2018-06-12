
import React from 'react'
import  { Card } from 'semantic-ui-react';



class CompanyCards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultsLoaded: true,
            objResult: [],
            error: null,
            companies: {}
        }

        // this.getAnotherClicked=this.getAnotherClicked.bind(this);
    }

    componentDidMount(){
        this.getCompanyResults();
        // .then((result) => {
        //     console.log("res res", result);
        // });
    }


    getCompanyResults() {
        fetch("https://bears-22c68.firebaseio.com/companies/")
        .then(res => res.json())
        .then(
            (result) => {
                console.log("res", result);
                this.setState({
                    objResult: result
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
            let {error, resultsLoaded, objResult} = this.state;

            if(error) {
                return (
                    <div>Error: {error.message}</div>
                )
            } else if(!resultsLoaded) {
                return <div>Loading...</div>
            } else{
                let newsArticle = objResult.map((link, index) => (
                    <div key={index}>
                      <Card>

                      </Card>
                    </div>
                ))
                return (
                    <div>{newsArticle}</div>
                )
            }
        
    }
}
    
export default CompanyCards;