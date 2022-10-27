import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

  const [error, setError] = useState('');

  const {createUser, updateUserProfile} = useContext(AuthContext);

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    }

    updateUserProfile(profile)
        .then(() => {

        })  
        .catch(error => {
          console.error('Update user profile error: ', error);
        })
  }

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);

    createUser(email, password)
        .then( result => {
          const user = result.user;
          console.log(user);
          setError('');
          form.reset();
          handleUpdateUserProfile(name, photoURL);
        })
        .catch(error => {
          console.error('Create user error: ', error);
          setError(error.message);
        })
  }

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-3">
                <input type="text" id="form1Example10" className="form-control form-control-lg" name='name'/>
                <label className="form-label" for="form1Example10" required>Full name</label>
              </div>

              <div className="form-outline mb-3">
                <input type="text" id="form1Example11" className="form-control form-control-lg" name='photoURL'/>
                <label className="form-label" for="form1Example11">Photo URL</label>
              </div>

              <div className="form-outline mb-3">
                <input type="email" id="form1Example12" className="form-control form-control-lg" name='email' required/>
                <label className="form-label" for="form1Example12">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input type="password" id="form1Example23" className="form-control form-control-lg" name='password' required/>
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
                <div className='fw-semibold'>Already registered? <Link to='/login'>Log in</Link></div>
              </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">Register</button>
            </form>
          </div>
          <div className="col-md-8 col-lg-7 col-xl-6">
            <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid" alt="Phone image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;