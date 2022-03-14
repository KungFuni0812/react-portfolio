import React from 'react';
import Button from './button';

const Card = (props) => {

    const cardstyle = {
        width: "100%",
    };
    
    return (
        <div className="mb-3" style={cardstyle}>
            <div className="row no-gutters">
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>  
                        <p className="card-text">{props.description}</p>
                        <h5>Technologies:</h5>
                        <div className="row flex flex-row">
                        {
                            props.tech.map( (obj) => {
                                return <Button name={obj.name} url={obj.url}/>
                            } )
                        }
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    {<img src={props.pic} className="img-fluid card-pic p-3" alt="" />}
                </div>                
            </div>
            <hr className="my-4" />
        </div>
    );
};

export default Card;