import React from 'react'

const SignUp:React.FC = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
<h2 className="text-4xl font-bold text-blue-500">Sign In</h2>
<form className="flex flex-col gap-5 p-10 shadow-lg rounded-lg w-100 items-left justify-center">
<label className="text-black font-bold">UserName</label>
<input type="text" className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md" placeholder='Enter Username'/>
<label className="font-bold text-black">Email</label>
<input type="text" className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md" placeholder='Enter Email'/>
<label className="font-bold text-black">Password</label>
<input type="text" className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md" placeholder='Enter Password'/>
<label className="font-bold text-black" htmlFor="">Confirm</label>
<input type="text" className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md" placeholder='Confirm Password' />
<button className="bg-blue-500 text-white w-full py-3 cursor-pointer hover:bg-blue-300 rounded-full">Sign Up</button>
</form>
</div>
  )
}

export default SignUp;