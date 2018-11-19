import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from  '../utils/MyButton';

class Discount extends Component {
    state = {
        discountStart:0,
        discountEnd:30
    }
    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage()
        },30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={() => this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                   
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th June</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget odio eu tortor gravida consequat eget id diam. Morbi porttitor egestas tristique. Ut luctus quis velit sed blandit. Duis a felis porta eros lacinia gravida ac quis libero. Aenean tellus lectus, ultrices eu volutpat et, lobortis sit amet nulla. Aliquam luctus nec tellus non auctor. Pellentesque fringilla facilisis sem lobortis iaculis.</p>
                        
                            <MyButton 
                                text="Purchase Tickets"
                                bck="#ffa800"
                                color="#fff"
                                link="http://google.com"
                            />
                        </div>
                    </Slide>
                    
                </div>
            </div>
        )
    }
}

export default Discount;