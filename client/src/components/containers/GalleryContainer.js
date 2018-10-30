import React from "react";

class Gallery extends React.Component {
    
    render() {
        return (
            <div class="container gallery-container">
                <div class="tz-gallery">

                    <div class="row">
                        {
                        this.props.img &&
                        this.props.img.map((image, i) => {
                            return <div class="col-sm-6 col-md-4">
                                        <a class="lightbox" href={image} >
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
