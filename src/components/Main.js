import React, { Component } from 'react';
import './main.css';
import CoolBear from './images/cool-bear.png';
import {Button} from 'semantic-ui-react';

class Main extends Component {
    render() {
        return(
            <div>
                <main>
                
                <img src={CoolBear} alt="cool-bear" className="bear"/>
                    <div className="quote-container">
                        <blockquote className="quote-blockquote">“...an understanding of our individual personality is profoundly important in maximizing our happiness and productivity at work!”</blockquote>
                        <h6 className="author">dr. kelly schofield, good&co 2016</h6>

                        <Button className="ui button">
                        Follow
                        </Button>
                    </div>

                </main>
                
            </div>
        )
    }
}


export default Main;