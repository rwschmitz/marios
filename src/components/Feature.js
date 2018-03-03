import React from 'react';
import Bucket from './Bucket';
import '../css/feature.css';

class Feature extends React.Component {
  render() {
    return (
      <section className="feature__wrapper">
        <Bucket bucketName="Title 1" btnName="Button 1"/>
        <Bucket bucketName="Title 2" btnName="Button 2"/>
        <Bucket bucketName="Title 3" btnName="Button 3"/>
      </section>
    );
  }
}

export default Feature;
