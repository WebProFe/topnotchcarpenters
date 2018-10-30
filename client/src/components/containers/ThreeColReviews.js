import React from "react";

class ThreeColReviews extends React.Component {
    
    render() {
        return (
            <div className="row col-md-4 container-row">
                <div className="full-width-row review-container">
                        <figure class="reviews">
                            <figcaption>
                                <blockquote>
                                <p>{this.props.review}</p>
                                </blockquote>
                                <h3>{this.props.author}</h3>
                                <h4>{this.props.location}</h4>
                            </figcaption>
                        </figure>
                </div>
            </div>
        );
    }
}

export default ThreeColReviews;
