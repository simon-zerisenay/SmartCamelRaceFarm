"use client";
import Link from "next/link";
//import PhoneInput from 'react-phone-number-input'
//import {  E164Number , PhoneNumber } from 'libphonenumber-js'
import React, { useEffect, useState, ChangeEvent } from "react";
import { useFormContext } from "../../../context/context";

import Image from "next/image";

const urlPath = process.env.NEXT_Base_url;

function navigate(url: string){
  window.location.href = url;
}

// async function auth(){
//   try{
//   const response =await fetch('http://localhost:3006/oAuthRegister',{method:'post'});

//   const data = await response.json();
//   console.log(data);
//   navigate(data.url);
//   }catch(err){
//     console.log(err);
//   }

// }

export default function SignUp() {

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

  // handling google singUp
  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3007/oAuthRegister`, {
        method: "POST",
      });
      const { url } = await response.json();
      window.location.href = url; // Redirect to Google OAuth consent screen
    } catch (error) {
      console.error("Error logging in with Google:", error);
      setIsLoading(false);
    }
  };

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
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }
    
    // if (mode === FormMode.SIGNUP) {
    if (
      formData.confirmPassword &&
      formData.confirmPassword.trim() !== formData.password.trim()
    ) {
      console.log("hello");
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }
    
    if (formData.phone_num && formData.phone_num.trim() === "") {
      newErrors.phone_num = "Phone number is required";
      isValid = false;
    }
    // }

    setErrors(newErrors);
    return isValid;
  };

  
 
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData)
    if (validateForm()) {
      setIsLoading(true);
      // Simulating form submission

      setIsLoading(false);
      handleRegister()
  };
}

  const handleRegister = async () =>{
    try {
      const response = await fetch(`http://localhost:3007/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);


        window.location.href = "/Dashboard"; // Redirect to homepage after successful registration
      } else {
        const errorData = await response.json();
        console.error('Error registering user:', errorData);
        // Handle error response (e.g., display error message to the user)
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle network errors or other exceptions
    }
  
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="shadow-sm rounded-2xl max-w-2xl w-3/4 md:w-1/3 flex flex-col justify-center items-center bg-white dark:bg-gray-900 mt-44">
      <h1 className="text-center font-bold text-gray-900 dark:text-gray-100 text-3xl mb-4">Sign Up</h1> 
      
       
        
        <form className="w-full flex flex-col  gap-3 p-5"
              onSubmit={handleSubmit}
        >
          
          <input type="text" 
          name ="name"
          placeholder="Full Name" 
          className="rounded-md" 
          value={formData.name}
           onChange={handleChange}/>
          {errors.name && (
              <p className="text-red-500 mt-1 text-sm font-sans font-light">
                {errors.name}
              </p>
            )}
          <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=" Email" 
          className="rounded-md" />
           {errors.email && (
              <p className="text-red-500 mt-1 text-sm font-sans font-light">
                {errors.email}
              </p>
            )}
          <input 
          type="password" 
          name ="password"
          value={formData.password}
          onChange={handleChange}
          placeholder ="Password" 
          className="rounded-md"/>
           {errors.password && (
              <p className="text-red-500 mt-1 text-sm font-sans font-light">
                {errors.password}
              </p>
            )}
          <input 
          type= 'password' 
          name ="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='confirm Password'
           className="rounded-md"/>
          {errors.confirmPassword && (
              <p className="text-red-500 mt-1 text-sm font-sans font-light">
                {errors.confirmPassword}
              </p>
            )}
  
          <input 
          type= 'phone' 
          name ="phone_num"
          value={formData.phone_num}
          onChange={handleChange}
          placeholder="Phone number" 
          className="rounded-md"/>
          {errors.phone_num && (
              <p className="text-red-500 mt-1 text-sm font-sans font-light">
                {errors.phone_num}
              </p>
            )}
          <button
            type="submit"
            className='flex justify-center items-center text-gray-100 mt-4 bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 dark:hover:bg-gray-100 dark:text-gray-900  dark:bg-gray-200 rounded-md text-lg  text-center self-center w-full'
          >
            Sign Up  
          </button>
        </form>
        <p>or</p>
        
        
        <div onClick={()=> handleGoogleLogin()}
        className=" flex justify-center items-center gap-3 rounded-md  py-2 px-5 my-3 cursor-pointer border-[1px] w-4/5">
        
        <Image src='/google.svg' alt='logo' height={30} width={30} />
        <p>Sign Up with Google</p>
        
        </div>
        <p className="p-2">Already have an account? <Link href="/Login" className=" underline text-blue-600 ">Sign in</Link></p>
      </div>
    </div>
  );
}
