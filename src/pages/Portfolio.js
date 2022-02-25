import React from 'react';
import Card from "../components/card";

const projects = [
    {
    name: "Project 1",
    pic: "./images/project1.jpg",
    id: 1,
    },

    {
    name: "Project 2",
    pic: '/images/project2.jpg',
    id: 2,
    },

    {
    name: "Project 3",
    pic: '/images/project3.jpg',
    id: 3,
    },

    {
    name: "Project 4",
    pic: '/images/project4.jpg',
    id: 4,
    },

    {
    name: "Project 5",
    pic: '/images/project5.jpg',
    id: 5,
    },

    {
    name: "Project 6",
    pic: '/images/project6.jpg',
    id: 6,
    },
];


const Portfolio = () => {
    return (

        <main className="container-fluid mb-3 justify-content-center">
                <div className="row no-gutters">
                    <div className= "col-md-1"/>
                    <div className="col-md-9">
                        <div className="row no-gutters flex-row">
                            <div className="card-group">
                                {
                                    projects.map( (obj) => {
                                        return (
                                            <Card name={obj.name} pic={obj.pic}/>
                                        )
                                    } )
                                }
                            </div>
                        </div>
                    <div className= "col-md-1"/>
                    </div>
                </div>
        </main>
        
    );
}

export default Portfolio;