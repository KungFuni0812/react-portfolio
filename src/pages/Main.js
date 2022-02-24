import React from 'react';

const Main = () => {
    return (
        <main className="container-fluid justify-content-center">
            <div className="container-fluid mb-3 justify-content-center">
                <div className="row no-gutters">
                    <div className= "col-md-1"/>
                    <div className="col-md-2">
                            <h1>About Me</h1>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">I am a selftaught developer that started the journey half year ago. I have been a payroll processor for more than 10 years,
                            but there was always something missing from my job. I started exploring the different paths and discover programing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;