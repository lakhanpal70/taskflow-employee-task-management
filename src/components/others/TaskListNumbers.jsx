import React from 'react'


const TaskListNumbers = ({data}) => {
  return (
    <div className=' flex mt-10 justify-between gap-5 screen '>
        <div className=' rounded-xl px-9 py-6 w-[45%] bg-red-400'>
            <h2 className=' text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className=' text-xl font-medium'>New Task</h3>
        </div>


        <div className=' rounded-xl px-9 py-6 w-[45%] bg-purple-400'>
            <h2 className=' text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className=' text-xl font-medium'>Complete Task</h3>
        </div>


        <div className=' rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
            <h2 className=' text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className=' text-xl font-medium'>Accepted Task</h3>
        </div>


        <div className=' rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
            <h2 className=' text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className=' text-xl font-medium'>Failed Task</h3>
        </div>



       
      
    </div>
  )
}

export default TaskListNumbers
