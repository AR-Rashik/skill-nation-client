import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import CourseCard from '../CourseCard/CourseCard';

const CourseInfo = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/course-categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, [])

  return (
    <div className='pb-5'>
      <Row>
          {
            categories.map(category => <CourseCard
              key={category.id}
              category={category}
            ></CourseCard>)
          }
      </Row>
    </div>
  );
};

export default CourseInfo;