
import React from 'react'
import './cards.css'
import { Item, Header } from 'semantic-ui-react'

// let paragraph = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`

// let companyState = getCompanyResults();

class CompanyCards extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            resultsLoaded: true,
            companyResults: [],
            error: null
        }
    }

    componentDidMount = () => {
        console.log("fetch running");
            fetch("https://bears-22c68.firebaseio.com/companies.json")
            .then(res => res.json())
            .then(
                (result) => {
                    
                    let companyNameArray = Object.values(result);
                    console.log("result",  Object.values(result));
                    
                    this.setState({
                        resultsLoaded: true,
                        companyResults: companyNameArray
                    })
                        return companyNameArray
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    })
                })
                return(console.log("DIDMOUNT SETSTATE:", this.setState))
        }


    render() {
            let {error, resultsLoaded, companyResults} = this.state;
            console.log("CARDS STATE", this.state);
            if(error) {
                return (
                    <div>Error: {error.message}</div>
                )
            } else if(!resultsLoaded) {
                return <div>Loading...</div>
            } else{
                let surveyResults = companyResults.map((company, index) => (
                    
                    <Item.Group divided key={index} className="results-item">
                        <Item className="company-columns">
                            <Item.Image src={company.logo} />

                            <Item.Content>
                                <Item.Header>{company.company}</Item.Header>
                                <Item.Meta>
                                <span className='cinema'>This company has {company.entries} culture fit reviews.</span> 
                                </Item.Meta>
                                <Item.Description><Header as='h6' className="h6">Is there an HR Department?</Header> {company.hr}</Item.Description>
                                <Item.Description><Header as='h6' className="h6">Dress code:</Header> {company.dress}</Item.Description>
                                <Item.Description><Header as='h6' className="h6">Management Style: </Header> {company.mgmt}</Item.Description>
                                <Item.Description><Header as='h6' className="h6">Office Layout: </Header> {company.layout}</Item.Description>
                                <Item.Description><Header as='h6' className="h6">Typical work-week schedule, benefits:</Header> {company.hours}</Item.Description>
                                <Item.Description><Header as='h6' className="h6">Pros:</Header> "{company.likes}"</Item.Description>
                                <Item.Description><Header as='h6' className="h6">Cons:</Header> "{company.dislikes}"</Item.Description>
                                <Item.Description><Header as='h6' className="h6">What made employees want to work there?:</Header> "{company.appeal}"</Item.Description>
                                <Item.Extra>
                                
                                {/*<Label icon='star outline' content='Additional Reviews' />*/}
                                </Item.Extra>
                            </Item.Content>

                        </Item>
                    </Item.Group>
                ))
                return (
                    <div className="results-container">{surveyResults}</div>
                )
            }
        
    }
}
    
export default CompanyCards;