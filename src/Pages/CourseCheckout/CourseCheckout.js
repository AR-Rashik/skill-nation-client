import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCheckout = () => {

  const course = useLoaderData();
  console.log(course);

  return (
    <div>
      <h2>This is course checkout page {course.category_id}</h2>
    </div>
  );
};

export default CourseCheckout;