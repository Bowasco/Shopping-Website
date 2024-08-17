import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup"

const Signup = () => {

    const {handleBlur, handleChange, touched, errors} = useFormik({
        initialValues : {
            firstName: "",
            lastName: "",
            Email: "",
            password: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required").min(5, "First Name must not be less than 5 characters").max(15, "First Name must not be more than 15 characters"),
            lastName: Yup.string().required("Last Name is required").min(5, "Last Name must not be less than 5 characters").max(15, "Last Name must not be more than 15 characters"),
            Email: Yup.string().email("Must be a valid email").required("Email is required"),
            Password: Yup.string().required("Email is required").min(8, "Password must not be less than 8 characters").max(10, "Password must not be more than 10 characters").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
        })
    })


  return (
    <div>
        <form action="" className="w-full md:w-1/2 lg:w-5/12 rounded-md  p-4 bg-slate-50 shadow-lg mx-auto  my-8">
        <h2 className='text-3xl text-center font-bold'>SIGNUP</h2>
        <input
        onChange={handleChange}
        onBlur={handleBlur}
          type="text"
          name='firstName'
          placeholder="Enter First Name"
          className={` w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3 ${touched.firstName && errors.firstName ? "border-2 border-red-500 ring-4 ring-blue-500" : "border-none outline-0 focus:ring-4 ring-cyan-200"}`}
        />
        <input
        onChange={handleChange}
        onBlur={handleBlur}
          type="text"
          name='lastName'
          placeholder="Enter Last Name"
          className={`w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3 ${touched.lastName && errors.lastName ? "border-2 border-red-500 ring-4 ring-blue-500" : "border-none outline-0 focus:ring-4 ring-cyan-200"}`}
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name='Email'
          placeholder="Enter Email"
          className={`w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3 ${touched.Email && errors.Email ? "border-2 border-red-500 ring-4 ring-blue-500" : "border-none outline-0 focus:ring-4 ring-cyan-200"}`}
        />
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          name='password'
          placeholder="Enter Password"
          className={`w-full p-3 rounded-md outline-none focus:ring-4 focus:ring-cyan-200 my-3 ${touched.password && errors.password ? "border-2 border-red-500 ring-4 ring-blue-500" : "border-none outline-0 focus:ring-4 ring-cyan-200"}`}
        />
        <button
          className="w-full py-3 rounded-lg bg-black text-white text-center"
          type="submit"
        >
          Sign Up
        </button>
        </form>
    </div>
  )
}

export default Signup