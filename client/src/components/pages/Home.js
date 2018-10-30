import React from 'react';
import Hero from '../containers/Hero';
import TwoCol from '../containers/TwoCol';
import PrimaryFourCol from '../containers/PrimaryFourCol';
import axios from 'axios';
import ThreeColReviews from '../containers/ThreeColReviews';


class HomePage extends React.Component {

    state = {
        TwoColdata: [],
        ReviewsData:[]
    }

    componentWillMount() {
        let that = this;
        axios.get(`/index-two-col-data`)
        .then(function(response) {
            that.setState({TwoColdata : response.data});
        })
        .catch(function (error) {
            console.log(error);
        });

        axios.get(`/index-three-col-reviews`)
        .then(function(response) {
            that.setState({ReviewsData : response.data});
        })
        .catch(function (error) {
            console.log(error);
        });


    }

    render() {
        return (
            <div>
                <Hero
                    header="Carpentry Services"
                    subHeader="Creative & Professional"
                    bg="home-hero-bg"
                    secondaryBg="home-hero-bg--secondary"
                    btnPara="Request A Quote"
                />

                {this.state.TwoColdata.map((data, i) => {
                    return (
                        <TwoCol
                            key={i}
                            header={data.header}
                            para={data.para}
                            img={data.img}
                            altText={data.altText}
                            btnPara={data.btnPara}
                            internalLink={data.internalLink}
                            link={data.link}
                            pullImg={data.pullImg}
                            bg={i % 2 === 0 ? null : 'cta-bg' }
                        />
                    )
                })}
                    
                    <PrimaryFourCol />

                    {this.state.ReviewsData.map((data, i) => {
                        return (
                            <ThreeColReviews 
                                key={i}
                                review={data.review}
                                author={data.author}
                                location={data.location}
                            />
                        )
                    })}
            </div>
        );
    }
}

export default HomePage;