import React from 'react';

const Contact = () => {
    return (

        <main className="container-fluid justify-content-center">
            <div className="row no-gutters">
                <div className="col-md-1" />
                <div className="col-md-10">
                    <div className="row">
                        <p className="ml-3">I am available for hire and ready to bring my skills and values to enrich your team.</p>
                        <div className="col-md-9">
                            <div className="row d-flex align-items-center">
                                <div className="col-2">
                                    E-mail:
                                </div>
                                <div className="col-8">
                                    <a href="mailto:kchen000@gmail.com/" className="btn btn-link btn-lg text-dark" target="_blank" role="button"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i><span className="font-weight-normal"> Kchen000@gmail.com</span></a>
                                </div>
                            </div>    
                            <div className="row d-flex align-items-center">
                                <div className="col-2">
                                    LinkedIn:
                                </div>
                                <div className="col-8 d-flex align-items-center">
                                    <a href="https://www.linkedin.com/in/kaini-feller-01412928" className="btn btn-link btn-lg text-dark" target="_blank" role="button"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i><span className="font-weight-normal"> Kaini-feller-01412928</span></a>
                                </div>
                            </div> 
                            <div className="row d-flex align-items-center">
                                <div className="col-2">
                                    GitHub:
                                </div>
                                <div className="col-8">
                                    <a href="https://github.com/KungFuni0812" className="btn btn-link btn-lg text-dark" target="_blank" role="button"><i className="fa fa-github-square fa-lg" aria-hidden="true"></i><span className="font-weight-normal"> KungFuni0812</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-1" />
            </div>
        </main>
    );
}

export default Contact;