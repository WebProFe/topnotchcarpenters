import React from 'react';
import Hero from '../containers/Hero';
import CallToAction from '../containers/CallToAction';
import FourColWrap from '../containers/FourColWrap';
import ThreeColWrap from '../containers/ThreeColWrap';

import axios from 'axios';

export default class Skills extends React.Component {
    state = {
        backEnd: {},
    
    }

    componentWillMount() {
        let that = this;
        axios.get(`/skills-data`)
        .then(function(response) {
            const backEnd = response.data.backEnd
                that.setState({ backEnd })
        })
        .catch(function (error) {
        })
    }
    render() {
        return (
            <div>
                <Hero
                    header="Transforming Austin"
                    subHeader="Our Work is Our Pride"
                    bg="home-hero-bg"
                    secondaryBg="skills-hero-bg--secondary"

                />
                <ThreeColWrap
                    header={this.state.backEnd.header}
                    para={this.state.backEnd.para}
                    skills={this.state.backEnd.skills}
                />
                <CallToAction
                    ctaHeader="Lets get your project started!"
                    ctaPara="Need more information?"
                    ctaBtnText="Request A  Quote"
                />
            </div>
        );
    }
}