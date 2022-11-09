import React from 'react';
import { Link } from 'react-router-dom';

const AllServices = ({srv}) => {
    const {_id, title, image, description, price } = srv;

    return (
      <div>
        <div className="card mx-auto card-compact w-96 bg-gray-900 shadow-xl text-white">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{title}</h2>
            <p className="text-start text-xl">{description.slice(0, 100)}...</p>
            <p className="text-start text-xl">${price}</p>
            <div className="card-actions justify-end">
              <Link to={`/details/${_id}`}>
                <button className="btn btn-primary">View details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllServices;