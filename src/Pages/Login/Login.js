import React from 'react';
import { Image } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" alt="Phone image" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input type="email" id="form1Example13" className="form-control form-control-lg" />
                <label className="form-label" for="form1Example13">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form1Example23" className="form-control form-control-lg" />
                <label className="form-label" for="form1Example23">Password</label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                  <label className="form-check-label" for="form1Example3"> Remember me </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              
              <button type="submit" className="btn btn-primary btn-lg btn-block w-100">Sign in</button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <div className="btn text-white btn-lg btn-block w-100 mb-3" style={{backgroundColor: "#DB4437"}} href="#!" role="button">
                <FaGoogle className='me-2'></FaGoogle> Continue with Google
              </div>
              <div className="btn text-white btn-lg btn-block w-100 " style={{backgroundColor: "#333"}} href="#!"
                role="button">
                <FaGithub className='me-2'></FaGithub> Continue with Github</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;