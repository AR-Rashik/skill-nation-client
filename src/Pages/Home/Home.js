import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import heroImage from '../../assets/hero.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="section py-5 my-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7 text-lg-start text-center">
              <h1 className="mb-4">A broad selection of courses. <br /> Expand your career opportunities </h1>
              <p className="mb-4">Choose from 204,000 online video courses with new additions published every month.</p>
              <Link className='' to='/courses'><Button variant="outline-primary">See our courses</Button></Link>
            </div>
            <div className="col-lg-4 d-lg-block d-none">
              <Image src={heroImage} alt="illustration" className="img-fluid"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;