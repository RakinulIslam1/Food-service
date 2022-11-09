import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img from '../Home/3683230.jpg'
import HomeServices from './HomeServices';


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
      <div>
        <div className="grid md:grid-cols-2 items-center mb-5">
          <div>
            <h2 className="text-3xl font-bold mb-2 mt-5 text-blue-600">
              ❝ Be Honest and keep Servicing ❞
            </h2>
            <p className="text-xl font-semibold mb-3">
              "To earn the respect (and eventually love) of your customers, you
              first have to respect those customers. That is why Golden Rule
              behavior is embraced by most of the winning companies."
            </p>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-blue-600 mb-7 underline">
            Here you can enjoy our meals :)
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {data.map((service) => (
            <HomeServices key={service._id} service={service}></HomeServices>
          ))}
        </div>
        <div>
          <Link to="/services">
            <button className="btn rounded-lg mb-5 text-xl bg-gray-900 text-white">See All Services</button>
          </Link>
        </div>
      </div>
    );
};

export default Home;