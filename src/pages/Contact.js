import React from 'react';

const Contact = () => {
    return (

        <main className="container-fluid justify-content-center">
            <div className="container-fluid mb-3 justify-content-center">
                <div className="row no-gutters">
                    <div className= "col-md-1"/>
                    <div className="col-md-9">
                        <div className="vcard card-body">
                            <h5>I am available for hire and ready to bring my skills and values to enrich your team.</h5>
                            <br className="my-2" />
                            <table>
                                <tr>
                                    <td>E-mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td><a href="mailto:kchen000@gmail.com/" class="btn btn-link btn-lg text-dark" target="_blank" role="button"><i class="fa fa-envelope fa-lg" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i>Kchen000@gmail.com</a></td>
                                </tr>    
                                <tr>
                                    <td>LinkeIn: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td><a href="https://www.linkedin.com/in/kaini-feller-01412928" class="btn btn-link btn-lg text-dark" target="_blank" role="button"><i class="fa fa-linkedin-square fa-lg" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i>Kaini-feller-01412928</a></td>
                                </tr> 
                                <tr>
                                    <td>GitHub: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td><a href="https://github.com/KungFuni0812" class="btn btn-link btn-lg text-dark" target="_blank" role="button"><i class="fa fa-github-square fa-lg" aria-hidden="true">&nbsp;&nbsp;&nbsp;</i>KungFuni0812</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className= "col-md-1"/>
                </div>
            </div>
        </main>
    );
}

export default Contact;