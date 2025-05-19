import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10 py-5'>
        <div className='flex-shrink-0 h-full w-[360px] bg-red-400 p-5 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h2 className='text-sm'>20 Feb 2024</h2>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube Video</h2>
           <p className='text-sm mt-2'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est non neque debitis labore iure delectus.
           </p>
        </div>
        <div className='flex-shrink-0 h-full w-[360px] bg-green-400 p-5 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h2 className='text-sm'>20 Feb 2024</h2>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube Video</h2>
           <p className='text-sm mt-2'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est non neque debitis labore iure delectus.
           </p>
        </div>
        <div className='flex-shrink-0 h-full w-[360px] bg-blue-400 p-5 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h2 className='text-sm'>20 Feb 2024</h2>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube Video</h2>
           <p className='text-sm mt-2'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est non neque debitis labore iure delectus.
           </p>
        </div>
        <div className='flex-shrink-0 h-full w-[360px] bg-yellow-400 p-5 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
            <h2 className='text-sm'>20 Feb 2024</h2>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube Video</h2>
           <p className='text-sm mt-2'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est non neque debitis labore iure delectus.
           </p>
        </div>
        
    </div>
  )
}

export default TaskList