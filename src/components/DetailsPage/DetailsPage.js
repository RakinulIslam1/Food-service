import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const DetailsPage = () => {
    const service = useLoaderData();
    useTitle('Details')
    // console.log(service);
    const { title, image, description } = service;
    return (
      <div>
        <div>
          <div className="mx-auto my-7 card card-compact w-96 bg-gray-900 shadow-xl text-white">
            <figure>
              <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{title}</h2>
              <p className="text-start text-xl">
                {description}
              </p>
              {/* <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}>
                  <button className="btn btn-primary">View details</button>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default DetailsPage;