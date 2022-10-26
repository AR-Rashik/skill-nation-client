import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css';


const Login = () => {

  const [error, setError] = useState('');

  const {providerLoginGoogle, providerLoginGitHub, signIn} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    providerLoginGoogle(googleProvider)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          console.error('Google sign in error: ', error);
        })
  }

  const handleGithubSignIn = () => {
    providerLoginGitHub(githubProvider)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          console.error('Github sign in error: ', error);
        })
  }

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          form.reset();
          setError('');

          navigate(from, {replace: true});
        })
        .catch(error => {
          console.error('Sign in error: ', error);
          setError(error.message);
        })
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" alt="Phone image" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input name='email' type="email" id="form1Example13" className="form-control form-control-lg" required/>
                <label className="form-label" for="form1Example13">Email address</label>
              </div>

              <div className="form-outline mb-2">
                <input name='password' type="password" id="form1Example23" className="form-control form-control-lg" required/>
                <label className="form-label" for="form1Example23">Password</label>
              </div>

              {
                error &&
                <div className='bg-danger text-light p-2 rounded-2 mb-3 fw-semibold'>
                  {error}
                </div>
              }

              <div className="d-flex justify-content-around align-items-center mb-4">
                
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                  <label className="form-check-label" for="form1Example3"> Remember me </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              <div className='d-flex justify-content-between'>
                <button type="submit" className="btn btn-primary btn-lg w-100 me-2">Sign in</button>
                <Link className='w-100' to='/register'><button type="button" className="btn btn-outline-primary btn-lg w-100">Register</button></Link>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <div onClick={handleGoogleSignIn} className="btn text-white btn-lg btn-block w-100 mb-3" style={{backgroundColor: "#DB4437"}} role="button">
                <FaGoogle className='me-2'></FaGoogle> Continue with Google
              </div>
              <div onClick={handleGithubSignIn} className="btn text-white btn-lg btn-block w-100 " style={{backgroundColor: "#333"}} role="button">
                <FaGithub className='me-2'></FaGithub> Continue with Github</div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;