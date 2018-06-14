
import React from 'react'
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
        return(console.log("props", this.state))
    }
    

    
    // componentDidMount(){
    //     this.setState = {
    //         companyResults: companyState
    //     }
    //     // .then((result) => {
    //     //     console.log("res res", result);
    //     // });
    // }



    componentDidMount = () => {
        console.log("fetch running");
            fetch("https://bears-22c68.firebaseio.com/companies.json")
            .then(res => res.json())
            .then(
                (result) => {
                    let companyNameArray = Object.values(result);
                    console.log("result",  Object.values(result));
                    return companyNameArray
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error,
                    })
                })
                return(console.log("DidMount setState", this.setState))
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
                    <Item.Group divided key={index}>
                        <Item>
                            <Item.Image src='/assets/images/wireframe/image.png' />

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
                    <div>{surveyResults}</div>
                )
            }
        
    }
}
    
export default CompanyCards;