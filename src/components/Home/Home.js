import React from 'react';
import img from '../Home/3683230.jpg'


const Home = () => {
    return (
      <div className="grid md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-2">❝ Delivery Service ❞</h2>
          <p className="text-xl font-semibold">
            "To earn the respect (and eventually love) of your customers, you
            first have to respect those customers. That is why Golden Rule
            behavior is embraced by most of the winning companies."
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    );
};

export default Home;