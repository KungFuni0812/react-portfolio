import React from 'react';

const Card = (props) => {

    const cardstyle = {
        width: "18rem",
    };
    
    return (
        <div className="card m-2" style={cardstyle}>
            {<img src={props.pic} className="card-pic card-img-top" alt="" />}
            <div className="card-body card-header bg-dark text-light">
                <h5 className="card-title">{props.name}</h5>    
            </div>
        </div>
    );
};

export default Card;