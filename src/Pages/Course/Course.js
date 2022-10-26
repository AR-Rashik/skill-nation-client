import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { FaDownload, FaStar } from 'react-icons/fa';
import './Course.css';

const ref = React.createRef();

const Course = () => {

  const course = useLoaderData();
  console.log(course);

  const {details, title, image_url, price, rating, teacher, category_id} = course;

  return (
    <div className='container responsive mb-5'>
      <div className='d-flex justify-content-between mb-5'>
        <h2 className='display-6'><span className='fw-semibold bg-dark text-light rounded'>Course</span> {title}</h2>
        <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button className='btn btn-outline-dark border border-dark border-2 fw-semibold' onClick={toPdf}>Download Pdf  <FaDownload></FaDownload> </button>}
          </Pdf>
      </div>
      <div ref={ref}>
        
          <Card className="text-center">
            <Card.Header className='fw-semibold'>What we have in our course?</Card.Header>
            <Card.Img variant="top" src={image_url}/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {details}
              </Card.Text>
              <div className='border-bottom border-muted border-3 mb-4'></div>
              <div className='d-flex justify-content-between fw-semibold mb-4'>
                <div>Instructor: {teacher?.name}</div>
                <div><FaStar></FaStar> {rating?.number}</div>
                <div>Price: {price} Taka</div>
              </div>
              <Link to={`/checkout/${category_id}`}><Button className='w-100' variant="dark">Get premium access</Button></Link>
            </Card.Body>
          </Card>
      </div>
    </div>
  );
};

export default Course;