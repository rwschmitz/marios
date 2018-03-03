import React from 'react';
import Button from './Button';
import Title from './Title';
import '../css/bucket.css';

const Bucket = ( {bucketName, btnName} ) => (
  <section className="bucket__wrapper">
  <article className="bucket">
    <Title titleName={bucketName}/>
    <Button btnName={btnName}/>
  </article>
</section>
);

export default Bucket;
