import React from 'react';

export default () => {
  return (
    <div className="footer-content">
      <div className="container text-center pt-lg-5">
        <h2>Give me your feedback!</h2>
        <h4>Thank you for your precious time...</h4>
      </div>
      <form className="form-group row pt-lg-5 pb-lg-5 pt-5">
        <div className="col-sm-12 col-md-5  offset-md-2">
          <input placeholder="enter your review " type="text" className="form-control mb-4" />
        </div>
        <div className="col-sm-12 col-md-3">
          <button type="submit" className="btn btn-block text-uppercase footer-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
