import React from 'react'

const Task =() => {
  return (
    <div className='flex flex-col flex-1'>
        <h1 className='font-semibold text-xl px-3 py-4 mb-5 text-green-800 animate-bounce hover:text-white cursor-pointer'>Nazeer Boss Yt To Do List</h1>
        <div className='flex'>
        <input className= 'w-full px-3 py-4 text-xl border rounded-tl-xl rounded-bl-xl focus:outline-none bg-transparent text-white placeholder:text-xl' type="text" placeholder='Enter Your Task' />
        <button className= 'px-3 bg-green-500 hover:bg-green-700  border rounded-r-xl text-xl' type='button'>AddTask</button>
        </div>
        <p className='font-semibold px-3 py-4 text-green-800'>Fill Task Details</p>
    </div>
  )
}

export default Task