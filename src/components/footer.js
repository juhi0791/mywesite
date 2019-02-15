import React from 'react';

export default () => {
    return (
        <div className="footer-content">
            <div className="container text-center pt-lg-5">
                <h2>Give us your email!</h2>
                <h4>We'll give you awesome products...</h4>
            </div>
            <form className="form-group row pt-lg-5 pb-lg-5 pt-5">
                <div className="col-sm-12 col-md-5  offset-md-2">
               <input placeholder="enter your email " type="email" className="form-control mb-4"></input>
                </div>
                <div className="col-sm-12 col-md-3">
                   <button type="submit" className="btn btn-block text-uppercase  footer-button" >Submit</button>
                </div>
            </form>
        </div>
    )
}