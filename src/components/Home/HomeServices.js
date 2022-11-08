import React from 'react';

const HomeServices = ({service}) => {
    const { title, image, description, price } = service;
    return (
      <div>
        <h2>Title{title}</h2>
        {/* <img src={image} alt="" /> */}
      </div>
    );
};

export default HomeServices;