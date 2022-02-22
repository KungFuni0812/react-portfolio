import React from 'react';
import Card from "../components/card";

const projects = [
    {
    name: "Project 1",
    pic: "../components/project1.jpg",
    id: 1,
    },

    {
    name: "Project 2",
    pic: '../components/project2.jpg',
    id: 2,
    },

    {
    name: "Project 3",
    pic: '../components/project2.jpg',
    id: 3,
    },

    {
    name: "Project 4",
    pic: '../components/project4.jpg',
    id: 4,
    },

    {
    name: "Project 5",
    pic: '../components/project4.jpg',
    id: 5,
    },

    {
    name: "Project 6",
    pic: '../components/project6.jpg',
    id: 5,
    },
];


const Portfolio = () => {
    return (
        <main className="container-fluid">
        <div className="page-header">
            <h1 className="text-center">Portfolio</h1>
        </div>
        <div>
            <ul>
                {
                    projects.map( (obj) => {
                        return (
                            <div className="container">
                                <li className="list-group-item text-center">
                                <Card name = {obj.name} pic = {obj.pic}/>
                                </li>
                            </div>
                        )
                    } )
                }
            </ul>
        </div>
        
        </main>
    );
}

export default Portfolio;