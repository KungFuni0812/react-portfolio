import React from 'react';

const Contact = () => {
    return (

        <main className="container-fluid justify-content-center">
            <div className="container-fluid mb-3 justify-content-center">
                <div className="row no-gutters">
                    <div className= "col-md-1"/>
                    <div className="col-md-9">
                        <div className="card-body">
                            <a href="https://www.linkedin.com/in/kaini-feller-01412928" class="btn btn-link btn-lg text-dark" target="_blank" role="button"><i class="fa fa-linkedin-square" aria-hidden="true"/></a>
                            <a href="https://github.com/KungFuni0812" class="btn btn-link btn-lg text-dark" target="_blank" role="button"><i class="fa fa-github-square" aria-hidden="true"/></a>
                            <a href="https://www.google.com/gmail/" class="btn btn-link btn-lg text-dark" target="_blank" role="button"><i class="fa fa-envelope" aria-hidden="true"></i> Kchen000@gmail.com</a>
                        </div>
                    </div>
                    <div className= "col-md-1"/>
                </div>
            </div>
        </main>
    );
}

export default Contact;