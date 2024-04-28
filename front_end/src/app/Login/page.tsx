"use client";
import Link from "next/link";
import PhoneInput from 'react-phone-number-input'
import {  E164Number , PhoneNumber } from 'libphonenumber-js'
import Image from "next/image";
import React, { useEffect, useState, ChangeEvent } from "react";
import { useFormContext } from "../../../context/context";

export default function Login() {
  interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    company_name?: string;
    phone_num?: string;
    code?: string;
    
    
  }

  const {
    formData,
    setFormData,
    errors,
    setErrors,
    formSubmitted,
    setFormSubmitted,
    isLoading,
    setIsLoading,
    digits,
    setDigits,
    // inputRefs,
  } = useFormContext();
  const [pin, setPin] = useState<string>("");

  // hanfle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
   
    setErrors({
      ...errors,
      [name]: "",
    });
  };
// input validation
const validateForm = (): boolean => {
  let isValid = true;
  const newErrors: FormErrors = {};
  if (formData.email.trim() === "") {
    newErrors.email = "Email is required";
    isValid = false;
  }

  if (formData.password.trim() === "") {
    newErrors.password = "Password is required";
    isValid = false;
  }
  
  setErrors(newErrors);
  return isValid;
};

// handling google sign in
const handleGoogleLogin = async () => {
  try {
    setIsLoading(true);
    const response = await fetch("http://localhost:3006/oAuthRegister", {
      method: "POST",
    });
    const { url } = await response.json();
    window.location.href = url; // Redirect to Google OAuth consent screen
  } catch (error) {
    console.error("Error logging in with Google:", error);
    setIsLoading(false);
  }
};


// handling email sign in
const handleLogin = async () => {
    try {
      setIsLoading(true);
      const newErrors: FormErrors = {};
      const response = await fetch("http://localhost:3006/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password:formData.password })
      })
      const data = await response.json(); // Properly parse JSON response
  
      console.log('Response Data:', data); // Log the response data
  
      if (data.user) {
        localStorage.setItem('token', data.user);
        window.location.href = '/Dashboard';
      } else if (data.error === 'Invalid email') {
        newErrors.email = 'Invalid email'
      } else if (data.error === 'Invalid password') {
        newErrors.password = 'Invalid password'
      } else {
        alert('An error occurred during login');
      }
      
    } catch (error) {}
      
}

// handle form submission
const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  console.log(formData)
  if (validateForm()) {
    setIsLoading(true);
    // Simulating form submission

    setIsLoading(false);
    handleLogin()
};
}

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="shadow-sm rounded-2xl max-w-2xl w-3/4 md:w-1/3 flex flex-col justify-center items-center bg-white dark:bg-black mt-44">
      <h1 className="text-center font-bold text-gray-900 dark:text-gray-100 text-3xl mb-4">Sign In</h1> 

      
        <form 
        onSubmit={handleSubmit}
        className="w-full flex flex-col  gap-3 p-5">
          <input 
          type="text"
          name ="email"
          value={formData.email}
          onChange={handleChange} 
          placeholder="Email" 
          className="rounded-md" />
          
          <input 
          type="text"  
          name ="password"
          value={formData.password}
          onChange={handleChange}
          placeholder = "Password"
          className="rounded-md" />
          <button
            type="submit"
            className='flex justify-center items-center text-gray-100 mt-4 bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-100 dark:text-gray-900  dark:bg-gray-200 rounded-md text-lg  text-center self-center w-full'
            
            
          >
            Sign In
          </button>
        </form>
        
        
        <p>or</p>
        
        
        <div onClick={()=> handleGoogleLogin()}
         className=" flex justify-center items-center gap-3 rounded-md  py-2 px-5 my-3 cursor-pointer border-[1px] w-4/5">
        
        <Image src='/google.svg' alt='logo' height={30} width={30} />
        <p>Sign in with Google</p>
        </div>
        <p className="p-2  my-5">Don't have an account? <Link href="/SignUp" className=" underline text-blue-500 ">Creat account</Link></p>
      </div>
    </div>
  );
}
