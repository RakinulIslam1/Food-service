import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../Home/3683230.jpg'
import HomeServices from './HomeServices';


const Home = () => {
    const data = useLoaderData();
    return (
      <div>
        <div className="grid md:grid-cols-2 items-center mb-5">
          <div>
            <h2 className="text-3xl font-bold mb-2 mt-5 text-blue-600">
              ❝ Delivery Service ❞
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
            {
                data.map( service => <HomeServices
                key={service.id}
                service={service}
                ></HomeServices>)
            }
        </div>
      </div>
    );
};

export default Home;