import React from 'react';

const Card = (props) => {

    const cardstyle = {
        width: "100rem",
    };
    
    return (
        <div className="mb-3" style={cardstyle}>
            <div className="row no-gutters">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>  
                        <p className="card-text">{props.description}</p>
                        <strong className="card-text">Technologies: {props.tech}</strong>
                    </div>
                </div>
                <div className="col-md-3">
                    {<img src={props.pic} className="img-fluid card-pic p-3" alt="" />}
                </div>                
            </div>
            <hr className="my-4" />
        </div>
    );
};

export default Card;