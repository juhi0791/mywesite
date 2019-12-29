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
          <button type="submit" className="btn btn-block btn-dark" style={{width: '30%'}}>
            Submit
          </button>
        </div>
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L17.1,101.3C34.3,107,69,117,103,144C137.1,171,171,213,206,234.7C240,256,274,256,309,250.7C342.9,245,377,235,411,224C445.7,213,480,203,514,197.3C548.6,192,583,192,617,192C651.4,192,686,192,720,192C754.3,192,789,192,823,202.7C857.1,213,891,235,926,256C960,277,994,299,1029,266.7C1062.9,235,1097,149,1131,128C1165.7,107,1200,149,1234,186.7C1268.6,224,1303,256,1337,229.3C1371.4,203,1406,117,1423,74.7L1440,32L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>
    </div>
  );
};
