import React from 'react';

const Card = (props) => {

    const cardstyle = {
        width: "18rem",
    };
    
    return (

        <div className="container">
            <div className="card" style={cardstyle}>
                <img
                    src="" className="card-img-top" alt=""
                />
                <div className="card-body">
                    <h5 className="card-title">Name: {props.name}</h5>
                    {/* <img src={require(props.pic)} className="card-pic" alt="" /> */}
                </div>
            </div>
        </div>
    );
};

export default Card;