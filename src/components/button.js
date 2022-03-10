import React from 'react';

const Button = (props) => {

    return (
        <div className="button" style={{marginLeft: 15+'px'}}>
            <strong className="card-text">
                <a class="btn btn-dark" href={props.url} target="_blank" role="button">{props.name}</a>
            </strong>
        </div>
    );
};

export default Button;