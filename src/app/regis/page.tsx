'use client'
import signUpApi from "@/lib/createUser";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
export default function RegisterForm() {
    const router = useRouter();
    const [Username, setUsername] = useState<string>("")
    const [Password, setPassword] = useState<string>("")
    const [Role, setRole] = useState<string>("user")
    const handSignUp = async()=>{
        await signUpApi(Username,Password,Role) 
        router.back();
    }

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="max-w-md w-full bg-gray-200 p-8 rounded-2xl shadow-xl" onSubmit={(e)=>{ e.preventDefault(); handSignUp()}}>
        <div className="text-black text-4xl font-bold text-center mb-8">
          Sign Up
        </div>
        {/* Email */}
        <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_email"
          id="floating_email"
          value={Username}               
          onChange={(e)=>{setUsername(e.target.value)}} 
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Username
        </label>
      </div>
        {/* Password */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={Password}               
            onChange={(e)=>{setPassword(e.target.value)}} 
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
