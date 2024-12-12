import React from 'react'

export default function LoginForm() {
  return (
<div className=' shadow-md space-y-5 border-[2px] w-[320px] sm:w-80 h-64 mx-auto relative top-1/3 bg-white rounded-lg pt-4' >
      <div className="rounded-lg item  flex flex-row border-[1px]  p-2 mx-3">
      <label htmlFor="userName" className='mr-2'>Name</label>
      <input type="text" id='userName' placeholder='name'  className='p-[2px] outline-none border-gray-300 border-[1px]'/>
    </div>
      <div className="rounded-lg item flex flex-row border-[1px]  p-2 mx-3">
      <label htmlFor="email" className='mr-2'>Email</label>
      <input type="email" id='email' placeholder='Email' className='p-[4px] outline-none border-gray-300 border-[1px]' />
    </div> <div className="flex flex-row  mx-3  ">
      <label htmlFor="remember" className='mr-2'>Remember me</label>
      <input type="checkbox" id='remember' value={'remenber me'} className='' />
    </div>
    <div className=" w-full flex  flex-row justify-center ">
      <button type="submit" className='rounded-lg  shadow-md text-white font-semibold active:opacity-85 p-2 bg-green-500 text text-lg w-2/3 tracking-wide '>Submit</button>
      </div>
</div>
  )
}
