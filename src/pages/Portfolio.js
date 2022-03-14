import React from 'react';
import Card from "../components/card";

const projects = [
    {
    name: "Project 1",
    pic: "./images/project1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla pulvinar enim, ac volutpat nisl eleifend interdum. Ut vel pulvinar elit, id varius ex. Mauris eget hendrerit metus. Vestibulum viverra neque id ornare sagittis. Phasellus ac vehicula nibh. Morbi tincidunt nisi non lacus posuere, sed fringilla risus sagittis. In vel pretium arcu, at tristique sem. ",
    tech: [
        {
            "name": "SQL", 
            "url":"https://www.mysql.com"
        },
        {
            "name": "NodeJS", 
            "url":"https://nodejs.org"
        },
        {
            "name": "Javascript", 
            "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
    ],
    id: 1,
    },

    {
    name: "Project 2",
    pic: '/images/project2.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla pulvinar enim, ac volutpat nisl eleifend interdum. Ut vel pulvinar elit, id varius ex. Mauris eget hendrerit metus. Vestibulum viverra neque id ornare sagittis. Phasellus ac vehicula nibh. Morbi tincidunt nisi non lacus posuere, sed fringilla risus sagittis. In vel pretium arcu, at tristique sem. ",
    tech: [
        {
            "name": "SQL", 
            "url":"https://www.mysql.com"
        },
        {
            "name": "NodeJS", 
            "url":"https://nodejs.org"
        },
        {
            "name": "Javascript", 
            "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            "name": "React", 
            "url":"https://reactjs.org"
        }
    ],
    id: 2,
    },

    {
    name: "Project 3",
    pic: '/images/project3.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla pulvinar enim, ac volutpat nisl eleifend interdum. Ut vel pulvinar elit, id varius ex. Mauris eget hendrerit metus. Vestibulum viverra neque id ornare sagittis. Phasellus ac vehicula nibh. Morbi tincidunt nisi non lacus posuere, sed fringilla risus sagittis. In vel pretium arcu, at tristique sem. ",
    tech: [
        {
            "name": "SQL", 
            "url":"https://www.mysql.com"
        },
        {
            "name": "NodeJS", 
            "url":"https://nodejs.org"
        },
        {
            "name": "Javascript", 
            "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
    ],
    id: 3,
    },

    {
    name: "Project 4",
    pic: '/images/project4.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla pulvinar enim, ac volutpat nisl eleifend interdum. Ut vel pulvinar elit, id varius ex. Mauris eget hendrerit metus. Vestibulum viverra neque id ornare sagittis. Phasellus ac vehicula nibh. Morbi tincidunt nisi non lacus posuere, sed fringilla risus sagittis. In vel pretium arcu, at tristique sem. ",
    tech: [
        {
            "name": "SQL", 
            "url":"https://www.mysql.com"
        },
        {
            "name": "NodeJS", 
            "url":"https://nodejs.org"
        },
        {
            "name": "Javascript", 
            "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
    ],
    id: 4,
    },

    {
    name: "Project 5",
    pic: '/images/project5.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla pulvinar enim, ac volutpat nisl eleifend interdum. Ut vel pulvinar elit, id varius ex. Mauris eget hendrerit metus. Vestibulum viverra neque id ornare sagittis. Phasellus ac vehicula nibh. Morbi tincidunt nisi non lacus posuere, sed fringilla risus sagittis. In vel pretium arcu, at tristique sem. ",
    tech: [
        {
            "name": "SQL", 
            "url":"https://www.mysql.com"
        },
        {
            "name": "NodeJS", 
            "url":"https://nodejs.org"
        },
        {
            "name": "Javascript", 
            "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
    ],
    id: 5,
    },

    {
    name: "Project 6",
    pic: '/images/project6.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla pulvinar enim, ac volutpat nisl eleifend interdum. Ut vel pulvinar elit, id varius ex. Mauris eget hendrerit metus. Vestibulum viverra neque id ornare sagittis. Phasellus ac vehicula nibh. Morbi tincidunt nisi non lacus posuere, sed fringilla risus sagittis. In vel pretium arcu, at tristique sem. ",
    tech: [
        {
            "name": "SQL", 
            "url":"https://www.mysql.com"
        },
        {
            "name": "NodeJS", 
            "url":"https://nodejs.org"
        },
        {
            "name": "Javascript", 
            "url":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
    ],
    id: 6,
    },
];


const Portfolio = () => {
    return (

        <main className="container-fluid mb-3 justify-content-center portfolio-main">
                <div className="row">
                    <div className= "col-md-1"/>
                    <div className="col-md-9">
                        <div className="row flex-wrap">
                            <div className="list-group">
                                {
                                    projects.map( (obj) => {
                                        return (
                                            <li>
                                            <Card name={obj.name} pic={obj.pic} description={obj.description} tech={obj.tech}/>
                                            </li>
                                        )
                                    } )
                                }
                            </div>
                        </div>
                    </div>
                    <div className= "col-md-1"/>
                </div>                
        </main>
        
    );
}

export default Portfolio;