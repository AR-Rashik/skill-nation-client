import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseCheckout = () => {

  const course = useLoaderData();
  console.log(course);

  const {title, image_url} = course;

  return (
    <div className='container text-center'>
      <Image fluid src={image_url}></Image>
      <div className='display-4 mt-4'>Welcome to <span className='fw-semibold'>{title}</span> course</div>
    </div>
  );
};

export default CourseCheckout;