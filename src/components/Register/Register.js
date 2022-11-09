import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Swal from "sweetalert2";
import useTitle from '../hooks/useTitle';

const Register = () => {
    const { createUser, userProfile, logOut } = useContext(AuthContext);
    const [error, setError] =useState('')
    const navigate = useNavigate();
    useTitle('SignUp');


    const handleSubmite = e =>{
        e.preventDefault()
        const form = e.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(photoURL, name, email, password);
        createUser(email, password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            setError('')
            form.reset();
            updateProfile(name, photoURL)
            Swal.fire("Good job!", "You have succesfully sign in!", "success");
            logOut();
            navigate('/login')
        })
        .catch(err => {
            console.error(err);
            const errorMessage = err.message;
            setError(errorMessage)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error,
            });
        });
    }
     const updateProfile = (name, photoURL) => {
       const profile = {
         displayName: name,
         photoURL: photoURL,
       };
       userProfile(profile);
     };

    return (
      <div className="text-start">
        <div className="w-96 my-10 mx-auto p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-2xl font-bold text-center">Sign up</h1>
          <form
            onSubmit={handleSubmite}
            novalidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label for="photoURL" className="block dark:text-gray-400">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                id=""
                placeholder="photoURL"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white text-black"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="name" className="block dark:text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white text-black"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="email" className="block dark:text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white text-black"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white text-black"
              />
            </div>
            <button className="block w-32 mx-auto  p-3 text-center rounded-lg dark:text-gray-900 dark:bg-violet-400">
              Sign up
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="underline dark:text-gray-100"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;