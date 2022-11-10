import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const DetailsPage = () => {
    const service = useLoaderData();
    useTitle('Details')
    // console.log(service);
    const { title, image, description, price } = service;
    return (
      <div>
        <div>
          <div className="mx-auto my-7 card card-compact w-96 bg-gray-900 shadow-xl text-white">
            <figure>
              <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{title}</h2>
              <p className="text-start text-xl">{description}</p>
              <p className="text-start text-xl">Price ${price}</p>
              <div className="flex justify-evenly">
                <button className="bg-white text-black p-2 rounded-lg font-semibold hover:bg-black hover:text-white text-1xl">
                  Request for Service
                </button>
                <Link to='/review'>
                  <button className="bg-white text-black p-2 rounded-lg font-semibold hover:bg-black hover:text-white text-1xl">
                    Give us Reviews
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsPage;