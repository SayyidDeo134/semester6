import React from 'react';
import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';
import Side from './Side';

function Back() {
    return (
        <>
            <div className="row mb-3">
                <div className="col-md-12" >
                    <Nav />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4" >
                    <Side />
                </div>
                <div className="col-md-8" >
                    <Main />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12" >
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Back;