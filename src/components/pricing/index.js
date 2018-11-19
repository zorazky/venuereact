import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    state = {
        prices: [100,150,250],
        posotions: ['Balcony','Medium','Star'],
        desc: [
            "Mauris rutrum blandit dui id bibendum.",
            "Nunc mi sapien, tincidunt commodo condimentum ut, vehicula a enim.",
            "Sed mattis eros in urna sollicitudin, eu dictum turpis elementum."
        ],
        linkto: ["http://google.com","http://google.com","http://google.com"],
        delay: [500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.posotions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton 
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
            
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;