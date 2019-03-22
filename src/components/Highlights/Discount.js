import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30
    }


    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>History of nama Kalburgi</h3>
                        <p>As of the 2011 Indian census,[12] Gulbarga city has a population of 543,000.Males constitute 55% of the population and females 45%. Gulbarga has an average literacy rate of 67%, higher than the national average of 59.5%. The male literacy is 70%, while that of females is 30%. In Gulbarga, 15% of the population is under 6 years of age. Kannada, Deccani Urdu and English are the main languages.</p>
                        </div>
                    </Slide>



                </div>
            </div>
        );
    }
}

export default Discount;
