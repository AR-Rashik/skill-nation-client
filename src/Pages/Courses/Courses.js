import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CourseCategory from '../CourseCategory/CourseCategory';
import CourseInfo from '../CourseInfo/CourseInfo';

const Courses = () => {
  return (
    <div className='container pb-5'>
      <Row>
        <Col lg='3'>
          <CourseCategory></CourseCategory>
        </Col>
        <Col lg='9'>
          <CourseInfo></CourseInfo>
        </Col>
      </Row>
    </div>
  );
};

export default Courses;