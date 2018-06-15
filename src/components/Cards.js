
import React from 'react'
import './cards.css'
import { Item, Label } from 'semantic-ui-react'

let paragraph = `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`

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
                    {/*set fetched 'result' items to an array with Object.values*/}
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
                        <Item>
                            <Item.Image src={company.logo} />

                            <Item.Content>
                                <Item.Header>{company.company}</Item.Header>
                                <Item.Meta>
                                <span className='cinema'>{company.company}</span>
                                </Item.Meta>
                                <Item.Description>{paragraph}</Item.Description>
                                <Item.Extra>
                                <Label>IMAX</Label>
                                <Label icon='globe' content='Additional Languages' />
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