import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseCard = ({category}) => {

  const {name, image_url, id} = category;

  return (
      <Col lg={4} className='mb-4'>
        <Card>
          <Card.Img style={{height: "200px"}} variant="top" src={image_url} />
          <Card.Body>
            <Card.Title className='mb-3'>{name}</Card.Title>
            <Link to={`/courses/${category.id}`}><Button variant="outline-dark" size="sm" className='fw-semibold'>Check details</Button></Link>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default CourseCard;