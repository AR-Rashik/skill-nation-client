import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseCategory.css';

const CourseCategory = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://skill-nation-server.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
  }, [])

  return (
    <div>
      <h3 className='mb-3'>Total courses: {categories.length}</h3>
      <ListGroup>
        {
          categories.map(category => <ListGroupItem key={category.id}>
            <Link className='text-decoration-none text-dark course-item fw-semibold' to={`/courses/${category.id}`}>{category.name}</Link></ListGroupItem>
          
          )
        }
      </ListGroup>
    </div>
  );
};

export default CourseCategory;