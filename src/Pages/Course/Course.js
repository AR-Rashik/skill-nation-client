import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = () => {

  const course = useLoaderData();
  console.log(course);

  const {details, title, image_url, price, rating, teacher, category_id} = course;

  return (
    <div className='container w-50'>
      <h2>{title}</h2>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/checkout/${category_id}`}><Button variant="primary">get premium access</Button></Link>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Course;