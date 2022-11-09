import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServices from './AllServices';

const Services = () => {
  const services = useLoaderData()
    return (
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-7'>
        {
          services.map(srv => <AllServices
          key={srv._id}
          srv={srv}
          ></AllServices>)
        }
      </div>
    );
};

export default Services;