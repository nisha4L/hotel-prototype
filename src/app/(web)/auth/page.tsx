"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
    email : "",
    name : "",
    password : "",
};

const Auth = () => {
    const [ formData, setFormData ] = useState(defaultFormData); 

    const inputStyles =
      "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";

    const handleInputChange = ( event : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name] : value});
    }

    const handleSubmit = async ( event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            console.log(formData);
        } catch (error) {
            console.log(error);
        } finally {
            setFormData(defaultFormData);
        }
    }

    return (
      <section className="container mx-auto">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
          <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Create an account
            </h1>
            <p>OR</p>
            <span className="inline-flex items-center">
              <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
              |
              <FcGoogle className="ml-3 text-4xl cursor-pointer" />
            </span>
          </div>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="example@email"
              className={inputStyles}
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={inputStyles}
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className={inputStyles}
              minLength={6}
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <button className="w-full dark:bg-white text-white dark:text-black bg-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Sign Up
            </button>
          </form>
          <div className="flex">
            <p className="text-black/70 text-md">Already Have An Account?</p>
            <button className="ml-2 underline text-blue-700 text-md">
              Login
            </button>
          </div>
        </div>
      </section>
    );
};

export default Auth;