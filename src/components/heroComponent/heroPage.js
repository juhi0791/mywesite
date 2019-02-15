import React from 'react';

export default () => {
    return (
        <>
            <div className="content">
                <h1>John <span className="secondary-name">Doe!</span></h1>
                <h2 className="sm-heading">
                    Web Developer, Programmer & Designer
                </h2>
                <div className="hero-icons">
                    <a href="/">
                    <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="/">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="/">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </div>
        </>
    )
}