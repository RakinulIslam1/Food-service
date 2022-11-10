import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";

const Reviwes = () => {
    useTitle('Reviews');
    const { title , _id } = useLoaderData();
    
    const {user} = useContext(AuthContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const msg = form.msg.value;

        const review = {
            service: _id,
            serviceName: title,
            email,
            customer: name,
            photoURL,
            msg
        }

        fetch("http://localhost:5000/orders", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                Swal.fire(
                  "Good job!",
                  "Such a nice review",
                  "success"
                );
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }

  return (
    <div>
      <h2 className="text-3xl font-bold mt-5">Write your review</h2>
      <div className="my-10 border-2 border-black w-1/2 mx-auto rounded-2xl shadow-2xl p-7">
        <form onSubmit={handleSubmit}>
          <div>
            <p className="font-bold">Name</p>
            <input
              name="name"
              type="text"
              placeholder="Type your name"
              className="input input-bordered w-full max-w-xs rounded-lg mb-4 border-black"
            />
            <p className="font-bold">Photo URL</p>
            <input
              name="photoURL"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full max-w-xs rounded-lg mb-4 border-black"
            />
            <p className="font-bold">Email</p>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs rounded-lg mb-8 border-black"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <textarea
            name="msg"
            className="textarea textarea-bordered rounded-lg w-full border-black"
            placeholder="Write your review..."
          ></textarea>
          <button className="bg-black text-white mt-3 flex p-2 rounded-lg font-semibold  text-1xl">
            Give Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviwes;
