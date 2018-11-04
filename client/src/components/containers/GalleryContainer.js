import React from "react";

class Gallery extends React.Component {

    
    render() {
        return (
            <div className="container gallery-container">
                <div className="tz-gallery">

                    <div className="row">
                        {
                        this.props.img &&
                        this.props.img.map((image, i) => {
                            return <div className="col-sm-6 col-md-4">
                                        <a className="lightbox" href={image}>
                                            <img key={i} src={image} alt="Gallery"/>
                                        </a>
                                    </div>

                            })
                        }
                    </div>

                </div>

            </div>
        );
    }
}

export default Gallery;
