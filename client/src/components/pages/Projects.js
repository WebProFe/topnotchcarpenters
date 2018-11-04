import React from 'react';
import Hero from '../containers/Hero';
import CallToAction from '../containers/CallToAction';

import axios from 'axios';
import Gallery from '../containers/GalleryContainer';

export default class HomePage extends React.Component {
    state = {
        TwoColdata: [],
        GalleryData: []
    }

    componentWillMount() {
        let that = this;
        axios.get(`/projects-two-col-data`)
            .then(function (response) {
                that.setState({ TwoColdata: response.data });
                console.log(that.state.TwoColdata[1])
            })
            .catch(function (error) {
                console.log(error);
            });
            axios.get(`/gallery`)
                .then(function (response) {
                    that.setState({ GalleryData: response.data });
                    console.log(that.state.TwoColdata[1])
                })
                .catch(function (error) {
                    console.log(error);
                })
    }

    handleClick() {
        this.preventDefault();
        alert(this)
      }


    render() {
        return (
            <div>
                <Hero
                    header="Gallery"
                    subHeader="Our Hard Work"
                    bg="home-hero-bg"
                />
                {this.state.GalleryData.map((data, i) => {
                    return (
                        <Gallery
                            key={i}
                            img={data.img}
                            altText={data.altText}
                            onPress ={this.handleClick.bind(this)}                            
                        />
                    )
                })}
                <CallToAction
                    ctaHeader="Need A Helping Hand With Your Project?"
                    ctaPara="I'm ready to start working on your project!"
                    ctaBtnText="GET A QUOTE"
                />
            </div>
        );
    }
}