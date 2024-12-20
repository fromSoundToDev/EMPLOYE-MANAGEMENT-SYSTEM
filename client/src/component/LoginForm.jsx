import React, { useState } from "react";
import  {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'



export default function LoginForm() {
  const navigate = useNavigate()
  const [formData, setformData] = useState({});
  const [error,setError]=useState(null)
  const [loading , setLoading] = useState(false)
  const handlechange = (e) => {
    
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      setError(null)
      const response = await axios.post("/Api/auth/sign-in",formData);
      
      if (response.statusText==="OK") {
        setLoading(false)
        navigate('/dashboard')
        return
      }
      if (response.response.data.success===false) {
        setLoading(false)
        setError(response.response.data.message)
        return;
      }

      
    } catch (err) {
      setLoading(false)
      setError(err.response.data.message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" shadow-md space-y-5 border-[2px] w-[320px] sm:w-80  mx-auto relative top-1/3 bg-white rounded-lg pt-4 pb-3"
    >
      <div className="rounded-lg group focus-within:ring-2 focus-within:ring-green-300  item  flex flex-row border-[1px]  p-2 mx-3">
        <label htmlFor="email" className="mr-2">
          Email
        </label>
        <input
          onChange={handlechange}
          type="email"
          id="email"
          placeholder="email"
          className="p-[2px] outline-none w-full border-gray-300 border-[1px]"
          required
        />
      </div>
      <div className="rounded-lg group focus-within:ring-2 focus-within:ring-green-300 item flex flex-row border-[1px]  p-2 mx-3">
        <label htmlFor="password" className="mr-2">
          Password
        </label>
        <input
          onChange={handlechange}
          type="password"
          id="password"
          placeholder="******"
          className="p-[2px] outline-none w-full border-gray-300 border-[1px]"
          required
        />
      </div>
      <div className="flex flex-row  mx-3  ">
        <label htmlFor="remember" className="mr-2">
          Remember me
        </label>
        <input
          onChange={handlechange}
          type="checkbox"
          id="remember"
          value={"remenber me"}
          className=""
        />
      </div>

      <div className=" w-full flex  flex-row justify-center  ">
        <button
        disabled= {loading}
          type="submit"
          className=" disabled:opacity-70 rounded-lg  shadow-md text-white font-semibold active:opacity-80 p-2 bg-green-500 text text-lg w-full tracking-wide m-2 "
        >
          {loading?"Loading":"submit"}
        </button>
        
      </div>
      <div className=" mx-3">
          <p className="">dont have an account? <Link to='/dashboard' className="text-green-500 ml-2">sign Up</Link> </p>
        </div>
        {
          error && <p className=" text-center  text-base font-semibold text-red-400 sm:text-xl">{error}</p>
        }
    </form>
  );
}
