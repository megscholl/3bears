
import React from 'react'
import  { Card } from 'semantic-ui-react';



class CompanyCards extends React.Component {
    render(props) {
        return(
            <Card fluid header={this.props.company}>
            
            </Card>
        )
    }
}
    
export default CompanyCards;