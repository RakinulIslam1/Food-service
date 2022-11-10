import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const AllServices = ({srv}) => {
    const {_id, title, image, description, price } = srv;
    useTitle('Services')
    return (
      <PhotoProvider>
        <div>
          <div className="card mx-auto card-compact w-96 bg-gray-900 shadow-xl text-white">
            <PhotoView src={image}>
              <img className="rounded-t-2xl" src={image} alt="" />
            </PhotoView>
            <div className="card-body">
              <h2 className="card-title text-2xl">{title}</h2>
              <p className="text-start text-xl">
                {description.slice(0, 70)}...
              </p>
              <p className="text-start text-xl">${price}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${_id}`}>
                  <button className="btn btn-primary font-semibold">
                    View details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PhotoProvider>
    );
};

export default AllServices;