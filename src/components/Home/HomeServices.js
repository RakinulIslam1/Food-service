import React from 'react';

const HomeServices = ({service}) => {
    const { title, image, description, price } = service;
    return (
      <div>
        <div className="card card-compact w-96 bg-gray-900 shadow-xl text-white">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{title}</h2>
            <p className="text-start text-xl">{description.slice(0, 100)}...</p>
            <p className="text-start text-xl">${price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeServices;